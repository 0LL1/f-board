import React from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { guitar } from './instruments'
import {
  StyledMenu,
  SoundToggle,
  AccidentalToggle,
  InstrumentToggle
} from './styles'

const Menu = ({
  instrument,
  sharps,
  sound,
  toggleSound,
  changeAccidentalType,
  changeInstrument
}) => {
  return (
    <StyledMenu>
      <SoundToggle onClick={toggleSound}>
        {sound ? <FiVolume2 /> : <FiVolumeX />}
      </SoundToggle>
      <AccidentalToggle onClick={changeAccidentalType}>
        {sharps ? 'b' : '#'}
      </AccidentalToggle>
      <InstrumentToggle onClick={changeInstrument}>
        {instrument === guitar ? '🎻' : '🎸'}
      </InstrumentToggle>
    </StyledMenu>
  )
}

export default Menu
