import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import { Sharpen, Flatten, NotePosition } from './styles'

const StyledString = styled.div`
  display: flex;
  flex-direction: column;
`

class String extends Component {
  render() {
    const frets = Array.from({ length: this.props.fretCount }, (v, i) => i)
    const tones = frets.map(fret =>
      Note.fromMidi(Note.midi(this.props.tuning + fret), this.props.sharps)
    )
    const notes = tones.map((tone, index) => (
      <NotePosition
        key={index}
        index={index}
        onClick={() => this.props.select(tone)}
        selected={this.props.selected.has(Note.chroma(tone))}
      >
        {Note.pc(tone)}
      </NotePosition>
    ))
    return (
      <StyledString>
        <Sharpen onClick={() => this.props.sharpen(this.props.index)}>
          &#43;
        </Sharpen>
        <Flatten onClick={() => this.props.flatten(this.props.index)}>
          &minus;
        </Flatten>
        <div>{notes}</div>
      </StyledString>
    )
  }
}

export default String
