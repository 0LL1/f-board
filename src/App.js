import React, { useState } from 'react'
import * as Note from 'tonal-note'
import Fingerboard from './components/fingerboard'
import Nav from './components/nav'
import { instruments } from './components/instruments'
import { GlobalStyle, StyledApp } from './components/styles'

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

const App = () => {
  const [instrument, setInstrument] = useState(instruments.guitar)
  const [selected, setSelected] = useState(new Set())
  const [sharps, setSharps] = useState(true)
  const [sound, setSound] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const select = tone => {
    const pc = Note.chroma(tone)
    if (selected.has(pc)) {
      selected.delete(pc)
      setSelected(new Set(selected))
    } else {
      setSelected(new Set(selected.add(pc)))
    }
  }

  const playSound = tone => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    gainNode.gain.value = 0.5
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    oscillator.type = 'triangle'
    oscillator.frequency.value = Note.freq(tone)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.4)
  }

  const changeAccidentalType = () => {
    setSharps(prevState => !prevState)
  }

  const changeInstrument = instrument => {
    setInstrument(instrument)
  }

  const toggleSound = () => {
    setSound(prevState => !prevState)
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

  const sharpen = index => {
    const newInstrument = [...instrument]
    newInstrument[index]++
    setInstrument(newInstrument)
  }

  const flatten = index => {
    const newInstrument = [...instrument]
    newInstrument[index]--
    setInstrument(newInstrument)
  }

  const openMenu = () => {
    setMenuOpen(prevState => !prevState)
  }

  return (
    <StyledApp>
      <GlobalStyle />
      <Fingerboard
        instrument={instrument}
        fretCount={26}
        selected={selected}
        sharps={sharps}
        sound={sound}
        select={select}
        playSound={playSound}
        sharpen={sharpen}
        flatten={flatten}
      />
      <Nav
        sharps={sharps}
        sound={sound}
        menuOpen={menuOpen}
        addLowString={addLowString}
        removeLowString={removeLowString}
        removeHighString={removeHighString}
        addHighString={addHighString}
        openMenu={openMenu}
        toggleSound={toggleSound}
        changeAccidentalType={changeAccidentalType}
        changeInstrument={changeInstrument}
      />
    </StyledApp>
  )
}

export default App
