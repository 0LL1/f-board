import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import String from './string'
import {
  colors,
  Adder,
  Remover,
  FretCountChanger,
  InstrumentToggle,
  AccidentalToggle
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
`
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1.8rem) repeat(12, 1fr);
  margin: 0 0.5rem;
`

const guitar = [64, 69, 74, 79, 83, 88]
const violin = [55, 62, 69, 76]

class Fingerboard extends Component {
  state = {
    tuning: guitar,
    fretCount: 13,
    selected: new Set(),
    sharps: true
  }

  select = tone => {
    !this.state.selected.has(Note.pc(tone))
      ? this.setState(
          prevState => new Set(prevState.selected.add(Note.pc(tone)))
        )
      : this.setState(
          prevState => {
            prevState.selected.delete(Note.pc(tone))
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

  addLowString = () => {
    this.setState(prevState => {
      const tuning = prevState.tuning
      const newStringTuning = tuning[0] - 5
      return { tuning: [newStringTuning, ...tuning] }
    })
  }

  removeLowString = () => {
    this.setState(prevState => {
      return { tuning: prevState.tuning.slice(1) }
    })
  }

  addHighString = () => {
    this.setState(prevState => {
      const tuning = prevState.tuning
      const newStringTuning = tuning[tuning.length - 1] + 5
      return { tuning: tuning.concat(newStringTuning) }
    })
  }

  removeHighString = () => {
    this.setState(
      prevState => {
        return { tuning: prevState.tuning.slice(0, -1) }
      },
      () => this.forceUpdate()
    )
  }

  addFret = () => {
    this.setState(prevState => {
      return { fretCount: prevState.fretCount + 1 }
    })
  }

  removeFret = () => {
    this.setState(prevState => {
      return { fretCount: prevState.fretCount - 1 }
    })
  }

  render() {
    const strings = this.state.tuning.map(tuning => (
      <String
        key={tuning}
        tuning={tuning}
        fretCount={this.state.fretCount}
        selected={this.state.selected}
        select={this.select}
        sharps={this.state.sharps}
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
          <Adder onClick={this.addHighString}>&#43;</Adder>
          <Remover onClick={this.removeHighString}>&minus;</Remover>
          <InstrumentToggle onClick={this.changeInstrument}>
            {this.state.tuning === guitar ? '🎻' : '🎸'}
          </InstrumentToggle>
          <FretCountChanger onClick={this.addFret}>&darr;</FretCountChanger>
        </Buttons>
      </Wrapper>
    )
  }
}

export default Fingerboard
