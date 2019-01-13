import React from 'react'
import Menu from './menu'
import { FiChevronLeft, FiChevronRight, FiMenu } from 'react-icons/fi'
import { StyledNav, Adder, Remover } from './styles'

const Nav = ({
  instrument,
  sharps,
  sound,
  menuOpen,
  addLowString,
  removeLowString,
  removeHighString,
  addHighString,
  openMenu,
  toggleSound,
  changeAccidentalType,
  changeInstrument
}) => {
  return (
    <StyledNav>
      <Adder onClick={addLowString}>
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover onClick={removeLowString}>
        <FiChevronRight className="icon" />
      </Remover>
      <Menu
        onClick={openMenu}
        instrument={instrument}
        sharps={sharps}
        sound={sound}
        menuOpen={menuOpen}
        toggleSound={toggleSound}
        changeAccidentalType={changeAccidentalType}
        changeInstrument={changeInstrument}
      >
        <FiMenu className="icon" />
      </Menu>
      <Remover onClick={removeHighString}>
        <FiChevronLeft className="icon" />
      </Remover>
      <Adder onClick={addHighString}>
        <FiChevronRight className="icon" />
      </Adder>
    </StyledNav>
  )
}

export default Nav
