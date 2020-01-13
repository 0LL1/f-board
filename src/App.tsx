import React, { useState } from 'react'
import { note } from '@tonaljs/tonal'
import Fingerboard from './components/Fingerboard'
import Nav from './components/Nav'
import { instruments } from './instruments'
import { GlobalStyle, StyledApp } from './styles'

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

const App = () => {
  const [instrument, setInstrument] = useState(instruments.guitar)
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

  const addLowString = () => {
    instrument.length < 8 &&
      setInstrument(prevState => [instrument[0] - 5, ...prevState])
  }

  const removeLowString = () => {
    instrument.length > 1 && setInstrument(prevState => prevState.slice(1))
  }

  const addHighString = () => {
    instrument.length < 8 &&
      setInstrument(prevState =>
        prevState.concat(instrument[instrument.length - 1] + 5)
      )
  }

  const removeHighString = () => {
    instrument.length > 1 && setInstrument(prevState => prevState.slice(0, -1))
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
      <Nav
        addLowString={addLowString}
        removeLowString={removeLowString}
        removeHighString={removeHighString}
        addHighString={addHighString}
      />
    </StyledApp>
  )
}

export default App
