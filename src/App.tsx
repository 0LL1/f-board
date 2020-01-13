import React, { useState } from 'react'
import { note } from '@tonaljs/tonal'
import Fingerboard from './components/Fingerboard'
import Nav from './components/Nav'
import { GlobalStyle, StyledApp } from './styles'

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

const App = () => {
  const [selected, setSelected] = useState<Set<number | undefined>>(new Set())

  const select = (tone: string) => {
    const pc = note(tone).chroma
    if (selected.has(pc)) {
      selected.delete(pc)
      setSelected(new Set(selected))
    } else {
      setSelected(new Set(selected.add(pc)))
    }
  }

  const playSound = (tone: string) => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    gainNode.gain.value = 0.5
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    oscillator.type = 'triangle'
    oscillator.frequency.value = note(tone).freq || 0
    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.4)
  }

  return (
    <StyledApp>
      <GlobalStyle />
      <Fingerboard
        fretCount={26}
        selected={selected}
        select={select}
        playSound={playSound}
      />
      <Nav />
    </StyledApp>
  )
}

export default App
