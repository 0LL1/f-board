import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import String from './string'
import {
  colors,
  vars,
  Adder,
  Remover,
  FretCountChanger,
  InstrumentToggle,
  AccidentalToggle,
  SoundToggle
} from './styles'

const Wrapper = styled.div`
  display: flex;
`

const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: ${colors.grey};
  box-shadow: ${vars.boxShadow};
`
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1.8rem) repeat(12, 1fr);
  margin: 0 0.3rem;
`

const guitar = [40, 45, 50, 55, 59, 64]
const violin = [55, 62, 69, 76]

class Fingerboard extends Component {
  state = {
    tuning: guitar,
    fretCount: 13,
    selected: new Set(),
    sharps: true,
    sound: true
  }

  select = tone => {
    !this.state.selected.has(Note.chroma(tone))
      ? this.setState(
          prevState => new Set(prevState.selected.add(Note.chroma(tone)))
        )
      : this.setState(
          prevState => {
            prevState.selected.delete(Note.chroma(tone))
            new Set(prevState.selected)
          },
          () => this.forceUpdate()
        )
  }

  changeAccidentalType = () => {
    this.setState(prevState => {
      return { sharps: !prevState.sharps }
    })
  }

  changeInstrument = () => {
    const newTuning = this.state.tuning === guitar ? violin : guitar
    this.setState({ tuning: newTuning })
  }

  toggleSound = () => {
    this.setState(prevState => {
      return { sound: !prevState.sound }
    })
  }

  addLowString = () => {
    this.state.tuning.length < 8 &&
      this.setState(prevState => {
        const tuning = prevState.tuning
        const newStringTuning = tuning[0] - 5
        return { tuning: [newStringTuning, ...tuning] }
      })
  }

  removeLowString = () => {
    this.state.tuning.length > 4 &&
      this.setState(prevState => {
        return { tuning: prevState.tuning.slice(1) }
      })
  }

  addHighString = () => {
    this.state.tuning.length < 8 &&
      this.setState(prevState => {
        const tuning = prevState.tuning
        const newStringTuning = tuning[tuning.length - 1] + 5
        return { tuning: tuning.concat(newStringTuning) }
      })
  }

  removeHighString = () => {
    this.state.tuning.length > 4 &&
      this.setState(
        prevState => {
          return { tuning: prevState.tuning.slice(0, -1) }
        },
        () => this.forceUpdate()
      )
  }

  addFret = () => {
    this.state.fretCount < 18 &&
      this.setState(prevState => {
        return { fretCount: prevState.fretCount + 1 }
      })
  }

  removeFret = () => {
    this.state.fretCount > 12 &&
      this.setState(prevState => {
        return { fretCount: prevState.fretCount - 1 }
      })
  }

  sharpen = index => {
    const newTuning = [...this.state.tuning]
    newTuning[index]++
    this.setState({ tuning: newTuning })
  }

  flatten = index => {
    const newTuning = [...this.state.tuning]
    newTuning[index]--
    this.setState({ tuning: newTuning })
  }

  render() {
    const strings = this.state.tuning.map((tuning, index) => (
      <String
        key={index}
        index={index}
        tuning={tuning}
        fretCount={this.state.fretCount}
        selected={this.state.selected}
        sharps={this.state.sharps}
        sound={this.state.sound}
        select={this.select}
        sharpen={this.sharpen}
        flatten={this.flatten}
      />
    ))

    return (
      <Wrapper>
        <Buttons>
          <AccidentalToggle onClick={this.changeAccidentalType}>
            {this.state.sharps ? 'b' : '#'}
          </AccidentalToggle>
          <Adder onClick={this.addLowString}>&#43;</Adder>
          <Remover onClick={this.removeLowString}>&minus;</Remover>
          <FretCountChanger onClick={this.removeFret}>&uarr;</FretCountChanger>
        </Buttons>
        <StyledFingerboard>{strings}</StyledFingerboard>
        <Buttons>
          <SoundToggle onClick={this.toggleSound}>
            {this.state.sound ? '🔇' : '🔊'}
          </SoundToggle>
          <InstrumentToggle onClick={this.changeInstrument}>
            {this.state.tuning === guitar ? '🎻' : '🎸'}
          </InstrumentToggle>
          <Adder onClick={this.addHighString}>&#43;</Adder>
          <Remover onClick={this.removeHighString}>&minus;</Remover>
          <FretCountChanger onClick={this.addFret}>&darr;</FretCountChanger>
        </Buttons>
      </Wrapper>
    )
  }
}

export default Fingerboard
