import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledString = styled.div`
  display: flex;
  flex-direction: column;
  .fret {
    width: 2.8rem;
    height: 2.8rem;
    border: none;
    margin: 1px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    color: #ffffff;
    :nth-child(1) {
      height: 1.8rem;
      background-color: #ffffff;
      color: #222222;
    }
    :nth-last-child(1) {
      border: none;
    }
  }
  /* [class~='C'] {
    background-color: #ffdc00;
    color: black; */
  }
  .sharpen {
    height: 1.8rem;
    background-color: #2ecc40;
    font-size: 1rem;
    color: white;
  }
  .flatten {
    height: 1.8rem;
    background-color: #ff4136;
    font-size: 1rem;
    color: white;
  }
`
class String extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tuning: props.tuning,
      fretCount: 13
    }
  }

  sharpen = () => {
    this.setState(state => {
      return { tuning: state.tuning + 1 }
    })
  }

  flatten = () => {
    this.setState(state => {
      return { tuning: state.tuning - 1 }
    })
  }

  render() {
    const fretCount = Array.from({ length: this.state.fretCount }, (v, i) => i)
    const tones = fretCount.map(fret =>
      Note.fromMidi(Note.midi(this.state.tuning + fret))
    )
    const frets = tones.map(tone => (
      <button
        className={`fret ${Note.pc(tone)}`}
        onClick={() => this.props.select(tone)}
      >
        {Note.pc(tone)}
      </button>
    ))
    return (
      <StyledString>
        <button className="sharpen" onClick={this.sharpen}>
          +
        </button>
        <button className="flatten" onClick={this.flatten}>
          -
        </button>
        <div>{frets}</div>
      </StyledString>
    )
  }
}

export default String
