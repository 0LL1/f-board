import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { note } from '@tonaljs/tonal'
import { midiToNoteName } from '@tonaljs/midi'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { sharpen, flatten, RootState } from '../state'
import { colors, StyledString, Sharpen, Flatten, NotePosition } from '../styles'

type StringProps = {
  index: number
  tuning: number
  fretCount: number
  selected: Set<number | undefined>
  select: (tone: string) => void
  playSound: (tone: string) => void
}

const String = ({
  index,
  tuning,
  fretCount,
  selected,
  select,
  playSound
}: StringProps) => {
  const dispatch = useDispatch()
  const { isSharps, hasSound } = useSelector((state: RootState) => {
    return {
      isSharps: state.settings.isSharps,
      hasSound: state.settings.hasSound
    }
  })

  const frets = Array.from({ length: fretCount }, (_v, i) => i)
  const tones = frets.map(fret =>
    midiToNoteName(tuning + fret, { sharps: isSharps })
  )
  const notes = tones.map((tone, index) => (
    <NotePosition
      key={index}
      isSelected={selected.has(note(tone).chroma)}
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
      <Sharpen
        onClick={() => dispatch(sharpen(index))}
        data-test={`sharpen-${index + 1}`}
      >
        <FiChevronUp className="icon" />
      </Sharpen>
      <Flatten
        onClick={() => dispatch(flatten(index))}
        data-test={`flatten-${index + 1}`}
      >
        <FiChevronDown className="icon" />
      </Flatten>
      <div data-test={`string-${index + 1}`}>{notes}</div>
    </StyledString>
  )
}

export default String