import React from "react"
import Menu from "./Menu"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { StyledNav, Adder, Remover } from "./styles"

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
  changeInstrument: () => void
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
      <Adder onClick={addLowString}>
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover onClick={removeLowString}>
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
