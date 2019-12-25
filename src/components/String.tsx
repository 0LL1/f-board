import React from "react"
import { note } from "@tonaljs/tonal"
import { midiToNoteName } from "@tonaljs/midi"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { colors, StyledString, Sharpen, Flatten, NotePosition } from "./styles"

type StringProps = {
  index: number
  tuning: number
  fretCount: number
  selected: Set<number | undefined>
  isSharps: boolean
  hasSound: boolean
  select: (tone: string) => void
  playSound: (tone: string) => void
  sharpen: (index: number) => void
  flatten: (index: number) => void
}

const String = ({
  index,
  tuning,
  fretCount,
  selected,
  isSharps,
  hasSound,
  select,
  playSound,
  sharpen,
  flatten
}: StringProps) => {
  const frets = Array.from({ length: fretCount }, (v, i) => i)
  const tones = frets.map(fret =>
    midiToNoteName(tuning + fret, { sharps: isSharps })
  )
  const notes = tones.map((tone, index) => (
    <NotePosition
      key={index}
      data-selected={selected.has(note(tone).chroma)}
      onClick={() => {
        select(tone)
        hasSound && playSound(tone)
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
      {note(tone).pc}
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
