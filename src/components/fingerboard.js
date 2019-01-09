import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import String from '../components/string'

const Wrapper = styled.div`
  display: flex;
`

const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #333333;
`
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1.8rem) repeat(12, 1fr);
  margin: 0 0.5rem;
`

const InstrumentToggle = styled.button`
  cursor: pointer;
  grid-row-start: 4;
  align-self: center;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 1.5rem;
  color: #111111;
`

const AccidentalToggle = styled.button`
  cursor: pointer;
  grid-row-start: 4;
  align-self: center;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 1rem;
  color: #111111;
`

const Adder = styled.button`
  cursor: pointer;
  grid-row-start: 9;
  align-self: center;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #3d9970;
  font-size: 1rem;
  color: #ffffff;
`

const Remover = styled.button`
  cursor: pointer;
  grid-row-start: 10;
  align-self: center;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #ff4136;
  font-size: 1rem;
  color: #ffffff;
`

const FretCountChanger = styled.button`
  cursor: pointer;
  grid-row-start: 15;
  align-self: center;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 1.5rem;
  color: #111111;
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
          <Adder onClick={this.addLowString}>S+</Adder>
          <Remover onClick={this.removeLowString}>S-</Remover>
          <FretCountChanger onClick={this.removeFret}>&uarr;</FretCountChanger>
        </Buttons>
        <StyledFingerboard>{strings}</StyledFingerboard>
        <Buttons>
          <Adder onClick={this.addHighString}>S+</Adder>
          <Remover onClick={this.removeHighString}>S-</Remover>
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
