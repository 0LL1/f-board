import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import { FiMenu, FiX, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { instruments } from '../instruments'
import {
  changeInstrument,
  toggleMenu,
  toggleAccidentals,
  toggleSound,
  RootState
} from '../state'
import {
  StyledMenu,
  MenuItem,
  SoundToggle,
  AccidentalToggle,
  Instrument
} from '../styles'

const Menu = () => {
  const dispatch = useDispatch()
  const { isMenuOpen, isSharps, hasSound } = useSelector((state: RootState) => {
    return {
      isMenuOpen: state.settings.isMenuOpen,
      isSharps: state.settings.isSharps,
      hasSound: state.settings.hasSound
    }
  })
  const transitions = useTransition(isMenuOpen, null, {
    from: { height: 0 },
    enter: { height: 280 },
    leave: { height: 0 },
    config: { duration: 175 }
  })

  const instrumentList = Object.entries(instruments).map(
    (instrument, index) => (
      <Instrument
        key={index}
        onClick={() => dispatch(changeInstrument(instrument[1]))}
      >
        {instrument[0]}
      </Instrument>
    )
  )

  return (
    <>
      <MenuItem onClick={() => dispatch(toggleMenu())} data-test="menu-button">
        {isMenuOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
      </MenuItem>
      <StyledMenu>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key}>
                <SoundToggle onClick={() => dispatch(toggleSound())}>
                  {hasSound ? <FiVolume2 /> : <FiVolumeX />}
                </SoundToggle>
                <AccidentalToggle
                  onClick={() => dispatch(toggleAccidentals())}
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
