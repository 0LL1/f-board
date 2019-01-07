import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledString = styled.div`
  display: flex;
  flex-direction: column;
  .sharpen {
    cursor: pointer;
    height: 1.8rem;
    background-color: #2ecc40;
    font-size: 1rem;
    color: white;
  }
  .flatten {
    cursor: pointer;
    height: 1.8rem;
    background-color: #ff4136;
    font-size: 1rem;
    color: white;
  }
`
const StyledNote = styled.div`
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
  border: none;
  margin: 1px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.selected ? '#ffdc00' : '#222222')};
  color: ${props => (props.selected ? '#222222' : '#ffffff')};
  :nth-child(1) {
    height: 1.8rem;
    background-color: #ffffff;
    color: #222222;
  }
}
`
class String extends Component {
  state = {
    tuning: this.props.tuning,
    fretCount: this.props.fretCount
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

  selected = tone => this.props.selected.has(Note.pc(tone))

  render() {
    const frets = Array.from({ length: this.state.fretCount }, (v, i) => i)
    const tones = frets.map(fret =>
      Note.fromMidi(Note.midi(this.state.tuning + fret))
    )
    const notes = tones.map(tone => (
      <StyledNote
        key={tone}
        className={`fret ${Note.pc(tone)}`}
        onClick={() => this.props.select(tone)}
        selected={this.selected(tone)}
      >
        {Note.pc(tone)}
      </StyledNote>
    ))
    return (
      <StyledString>
        <button className="sharpen" onClick={this.sharpen}>
          +
        </button>
        <button className="flatten" onClick={this.flatten}>
          -
        </button>
        <div>{notes}</div>
      </StyledString>
    )
  }
}

export default String
