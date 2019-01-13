import React from 'react'
import String from './string'
import { StyledFingerboard } from './styles'

const FingerBoard = ({
  instrument,
  fretCount,
  selected,
  sharps,
  sound,
  select,
  playSound,
  sharpen,
  flatten
}) => {
  const strings = instrument.map((tuning, index) => (
    <String
      key={index}
      index={index}
      tuning={tuning}
      fretCount={fretCount}
      selected={selected}
      sharps={sharps}
      sound={sound}
      select={select}
      playSound={playSound}
      sharpen={sharpen}
      flatten={flatten}
    />
  ))
  return <StyledFingerboard>{strings}</StyledFingerboard>
}

export default FingerBoard
