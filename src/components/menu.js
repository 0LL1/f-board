import React from "react"
import { useTransition, animated } from "react-spring"
import { FiMenu, FiX, FiVolume2, FiVolumeX } from "react-icons/fi"
import { instruments } from "./instruments"
import {
  StyledMenu,
  MenuItem,
  SoundToggle,
  AccidentalToggle,
  Instrument
} from "./styles"

const Menu = ({
  isSharps,
  hasSound,
  isMenuOpen,
  openMenu,
  toggleSound,
  changeAccidentalType,
  changeInstrument
}) => {
  const transitions = useTransition(isMenuOpen, null, {
    from: { height: 0 },
    enter: { height: 280 },
    leave: { height: 0 },
    config: { duration: 175 }
  })

  const instrumentList = Object.entries(instruments).map(instrument => (
    <Instrument
      key={instrument}
      onClick={() => changeInstrument(instrument[1])}
    >
      {instrument[0]}
    </Instrument>
  ))

  return (
    <>
      <MenuItem onClick={openMenu}>
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
                <AccidentalToggle onClick={changeAccidentalType}>
                  {isSharps ? "#" : "b"}
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
