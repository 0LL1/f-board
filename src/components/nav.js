import React from 'react'
import Menu from './menu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { StyledNav, Adder, Remover } from './styles'

const Nav = ({
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
        sharps={sharps}
        sound={sound}
        menuOpen={menuOpen}
        openMenu={openMenu}
        toggleSound={toggleSound}
        changeAccidentalType={changeAccidentalType}
        changeInstrument={changeInstrument}
      />
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
