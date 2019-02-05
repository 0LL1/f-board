import React, { Component } from 'react'
import * as Note from 'tonal-note'
import Fingerboard from './components/fingerboard'
import Nav from './components/nav'
import { instruments } from './components/instruments'
import { GlobalStyle, StyledApp } from './components/styles'

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

class App extends Component {
  state = {
    instrument: instruments.guitar,
    fretCount: 26,
    selected: new Set(),
    sharps: true,
    sound: true,
    menuOpen: false
  }

  select = tone => {
    !this.state.selected.has(Note.chroma(tone))
      ? this.setState(
          prevState => new Set(prevState.selected.add(Note.chroma(tone)))
        )
      : this.setState(prevState => {
          prevState.selected.delete(Note.chroma(tone))
          return {
            selected: new Set(prevState.selected)
          }
        })
  }

  playSound = tone => {
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

  changeAccidentalType = () => {
    this.setState(prevState => {
      return { sharps: !prevState.sharps }
    })
  }

  changeInstrument = instrument => {
    this.setState({ instrument: instrument })
  }

  toggleSound = () => {
    this.setState(prevState => {
      return { sound: !prevState.sound }
    })
  }

  addLowString = () => {
    this.state.instrument.length < 8 &&
      this.setState(prevState => {
        const instrument = prevState.instrument
        const newInstrument = instrument[0] - 5
        return { instrument: [newInstrument, ...instrument] }
      })
  }

  removeLowString = () => {
    this.state.instrument.length > 1 &&
      this.setState(prevState => {
        return { instrument: prevState.instrument.slice(1) }
      })
  }

  addHighString = () => {
    this.state.instrument.length < 8 &&
      this.setState(prevState => {
        const instrument = prevState.instrument
        const newInstrument = instrument[instrument.length - 1] + 5
        return { instrument: instrument.concat(newInstrument) }
      })
  }

  removeHighString = () => {
    this.state.instrument.length > 1 &&
      this.setState(prevState => {
        return { instrument: prevState.instrument.slice(0, -1) }
      })
  }

  sharpen = index => {
    const newInstrument = [...this.state.instrument]
    newInstrument[index]++
    this.setState({ instrument: newInstrument })
  }

  flatten = index => {
    const newInstrument = [...this.state.instrument]
    newInstrument[index]--
    this.setState({ instrument: newInstrument })
  }

  openMenu = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen }
    })
  }

  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Fingerboard
          instrument={this.state.instrument}
          fretCount={this.state.fretCount}
          selected={this.state.selected}
          sharps={this.state.sharps}
          sound={this.state.sound}
          select={this.select}
          playSound={this.playSound}
          sharpen={this.sharpen}
          flatten={this.flatten}
        />
        <Nav
          sharps={this.state.sharps}
          sound={this.state.sound}
          menuOpen={this.state.menuOpen}
          addLowString={this.addLowString}
          removeLowString={this.removeLowString}
          removeHighString={this.removeHighString}
          addHighString={this.addHighString}
          openMenu={this.openMenu}
          toggleSound={this.toggleSound}
          changeAccidentalType={this.changeAccidentalType}
          changeInstrument={this.changeInstrument}
        />
      </StyledApp>
    )
  }
}

export default App
