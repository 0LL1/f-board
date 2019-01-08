import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import String from '../components/string'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`

const Adder = styled.button`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #2ecc40;
  font-size: 1rem;
  color: #ffffff;
`

const Remover = styled.button`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #ff4136;
  font-size: 1rem;
  color: #ffffff;
`

class Fingerboard extends Component {
  state = {
    tuning: [64, 69, 74, 79, 83, 88],
    fretCount: 13,
    selected: new Set()
  }

  select = tone => {
    !this.state.selected.has(Note.pc(tone))
      ? this.setState(
          prevState => new Set(prevState.selected.add(Note.pc(tone)))
        )
      : this.setState(prevState => {
          prevState.selected.delete(Note.pc(tone))
          new Set(prevState.selected)
          this.forceUpdate()
        })
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
    this.setState(prevState => {
      return { tuning: prevState.tuning.slice(0, -1) }
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
      />
    ))

    return (
      <Wrapper>
        <Buttons>
          <Adder onClick={this.addLowString}>S+</Adder>
          <Remover onClick={this.removeLowString}>S-</Remover>
        </Buttons>
        <StyledFingerboard>{strings}</StyledFingerboard>
        <Buttons>
          <Adder onClick={this.addHighString}>S+</Adder>
          <Remover onClick={this.removeHighString}>S-</Remover>
        </Buttons>
      </Wrapper>
    )
  }
}

export default Fingerboard
