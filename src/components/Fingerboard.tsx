import React from 'react'
import String from './String'
import { StyledFingerboard } from '../styles'

type FingerboardProps = {
  instrument: number[]
  fretCount: number
  selected: Set<number | undefined>
  isSharps: boolean
  hasSound: boolean
  select: (tone: string) => void
  playSound: (tone: string) => void
  sharpen: (index: number) => void
  flatten: (index: number) => void
}

const FingerBoard = ({
  instrument,
  fretCount,
  selected,
  isSharps,
  hasSound,
  select,
  playSound,
  sharpen,
  flatten
}: FingerboardProps) => {
  const strings = instrument.map((tuning, index) => (
    <String
      key={index}
      index={index}
      tuning={tuning}
      fretCount={fretCount}
      selected={selected}
      isSharps={isSharps}
      hasSound={hasSound}
      select={select}
      playSound={playSound}
      sharpen={sharpen}
      flatten={flatten}
    />
  ))
  return (
    <StyledFingerboard data-test="fingerboard">{strings}</StyledFingerboard>
  )
}

export default FingerBoard
