import React from 'react'
import * as Note from 'tonal-note'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { colors, StyledString, Sharpen, Flatten, NotePosition } from './styles'

const String = ({
  index,
  tuning,
  fretCount,
  selected,
  sharps,
  sound,
  select,
  playSound,
  sharpen,
  flatten
}) => {
  const frets = Array.from({ length: fretCount }, (v, i) => i)
  const tones = frets.map(fret =>
    Note.fromMidi(Note.midi(tuning + fret), sharps)
  )
  const notes = tones.map((tone, index) => (
    <NotePosition
      key={index}
      selected={selected.has(Note.chroma(tone))}
      onClick={() => {
        select(tone)
        sound && playSound(tone)
      }}
    >
      <svg width="2.4rem" height="2.4rem">
        <line
          x1="1.2rem"
          y1="0rem"
          x2="1.2rem"
          y2="0.6rem"
          stroke={colors.dark}
          strokeWidth="0.1rem"
        />
        <line
          x1="1.2rem"
          y1="1.8rem"
          x2="1.2rem"
          y2="2.4rem"
          stroke={colors.dark}
          strokeWidth="0.1rem"
        />
      </svg>
      {Note.pc(tone)}
    </NotePosition>
  ))
  return (
    <StyledString>
      <Sharpen onClick={() => sharpen(index)}>
        <FiChevronUp className="icon" />
      </Sharpen>
      <Flatten onClick={() => flatten(index)}>
        <FiChevronDown className="icon" />
      </Flatten>
      <div>{notes}</div>
    </StyledString>
  )
}

export default String
