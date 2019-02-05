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
      <svg width="40px" height="40px">
        <line
          x1="20px"
          y1="0px"
          x2="20px"
          y2="10.4px"
          stroke={colors.grey}
          strokeWidth="1.6px"
        />
        <line
          x1="20px"
          y1="28px"
          x2="20px"
          y2="40px"
          stroke={colors.grey}
          strokeWidth="1.6px"
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
