import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import { Sharpen, Flatten, NotePosition } from './styles'

const StyledString = styled.div`
  display: flex;
  flex-direction: column;
`

class String extends Component {
  state = {
    tuning: this.props.tuning
  }

  sharpen = () => {
    this.setState(prevState => {
      return { tuning: prevState.tuning + 1 }
    })
  }

  flatten = () => {
    this.setState(prevState => {
      return { tuning: prevState.tuning - 1 }
    })
  }

  render() {
    const frets = Array.from({ length: this.props.fretCount }, (v, i) => i)
    const tones = frets.map(fret =>
      Note.fromMidi(Note.midi(this.state.tuning + fret), this.props.sharps)
    )
    const notes = tones.map(tone => (
      <NotePosition
        key={tone}
        onClick={() => this.props.select(tone)}
        selected={this.props.selected.has(Note.pc(tone))}
      >
        {Note.pc(tone)}
      </NotePosition>
    ))
    return (
      <StyledString>
        <Sharpen onClick={this.sharpen}>&#43;</Sharpen>
        <Flatten onClick={this.flatten}>&minus;</Flatten>
        <div>{notes}</div>
      </StyledString>
    )
  }
}

export default String
