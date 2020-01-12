import React from 'react'
import { useTransition, animated } from 'react-spring'
import { FiMenu, FiX, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { instruments } from '../instruments'
import {
  StyledMenu,
  MenuItem,
  SoundToggle,
  AccidentalToggle,
  Instrument
} from '../styles'

type MenuProps = {
  isSharps: boolean
  hasSound: boolean
  isMenuOpen: boolean
  openMenu: () => void
  toggleSound: () => void
  changeAccidentalType: () => void
  changeInstrument: (instrument: number[]) => void
}

const Menu = ({
  isSharps,
  hasSound,
  isMenuOpen,
  openMenu,
  toggleSound,
  changeAccidentalType,
  changeInstrument
}: MenuProps) => {
  const transitions = useTransition(isMenuOpen, null, {
    from: { height: 0 },
    enter: { height: 280 },
    leave: { height: 0 },
    config: { duration: 175 }
  })

  const instrumentList = Object.entries(instruments).map(
    (instrument, index) => (
      <Instrument key={index} onClick={() => changeInstrument(instrument[1])}>
        {instrument[0]}
      </Instrument>
    )
  )

  return (
    <>
      <MenuItem onClick={openMenu} data-test="menu-button">
        {isMenuOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
      </MenuItem>
      <StyledMenu>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <SoundToggle onClick={toggleSound}>
                  {hasSound ? <FiVolume2 /> : <FiVolumeX />}
                </SoundToggle>
                <AccidentalToggle
                  onClick={changeAccidentalType}
                  data-test="accidental-toggle"
                >
                  {isSharps ? '#' : 'b'}
                </AccidentalToggle>
                <div>{instrumentList}</div>
              </animated.div>
            )
        )}
      </StyledMenu>
    </>
  )
}

export default Menu
