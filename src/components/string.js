import React, { Component } from 'react'
import * as Note from 'tonal-note'
import { colors, StyledString, Sharpen, Flatten, NotePosition } from './styles'

// Web Audio API stuff for sounds
const audioContext = new AudioContext()

class String extends Component {
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

  render() {
    const frets = Array.from({ length: this.props.fretCount }, (v, i) => i)
    const tones = frets.map(fret =>
      Note.fromMidi(Note.midi(this.props.tuning + fret), this.props.sharps)
    )
    const notes = tones.map((tone, index) => (
      <NotePosition
        key={index}
        onClick={() => {
          this.props.select(tone)
          this.props.sound && this.playSound(tone)
        }}
        selected={this.props.selected.has(Note.chroma(tone))}
      >
        <svg width="2.8rem" height="2.8rem">
          <line
            x1="1.4rem"
            y1="0rem"
            x2="1.4rem"
            y2="0.8rem"
            stroke="#111111"
            strokeWidth="1px"
          />
          <line
            x1="1.4rem"
            y1="2rem"
            x2="1.4rem"
            y2="2.8rem"
            stroke="#111111"
            strokeWidth="1px"
          />
        </svg>
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
