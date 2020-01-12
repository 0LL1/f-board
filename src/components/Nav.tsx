import React from 'react'
import Menu from './Menu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { StyledNav, Adder, Remover } from './styles'

type NavProps = {
  isSharps: boolean
  hasSound: boolean
  isMenuOpen: boolean
  addLowString: () => void
  removeLowString: () => void
  removeHighString: () => void
  addHighString: () => void
  openMenu: () => void
  toggleSound: () => void
  changeAccidentalType: () => void
  changeInstrument: (instrument: number[]) => void
}

const Nav = ({
  isSharps,
  hasSound,
  isMenuOpen,
  addLowString,
  removeLowString,
  removeHighString,
  addHighString,
  openMenu,
  toggleSound,
  changeAccidentalType,
  changeInstrument
}: NavProps) => {
  return (
    <StyledNav>
      <Adder onClick={addLowString} data-test="add-low-string">
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover onClick={removeLowString} data-test="remove-low-string">
        <FiChevronRight className="icon" />
      </Remover>
      <Menu
        isSharps={isSharps}
        hasSound={hasSound}
        isMenuOpen={isMenuOpen}
        openMenu={openMenu}
        toggleSound={toggleSound}
        changeAccidentalType={changeAccidentalType}
        changeInstrument={changeInstrument}
      />
      <Remover onClick={removeHighString} data-test="remove-high-string">
        <FiChevronLeft className="icon" />
      </Remover>
      <Adder onClick={addHighString} data-test="add-high-string">
        <FiChevronRight className="icon" />
      </Adder>
    </StyledNav>
  )
}

export default Nav
