import React from 'react'
import { useSelector } from 'react-redux'
import String from './String'
import { RootState } from '../state'
import { StyledFingerboard } from '../styles'

type FingerboardProps = {
  fretCount: number
  selected: Set<number | undefined>
  select: (tone: string) => void
  playSound: (tone: string) => void
  sharpen: (index: number) => void
  flatten: (index: number) => void
}

const FingerBoard = ({
  fretCount,
  selected,
  select,
  playSound,
  sharpen,
  flatten
}: FingerboardProps) => {
  const { instrument } = useSelector((state: RootState) => {
    return {
      instrument: state.instrument
    }
  })

  const strings = instrument.map((tuning, index) => (
    <String
      key={index}
      index={index}
      tuning={tuning}
      fretCount={fretCount}
      selected={selected}
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
