import React from 'react'
import Menu from './Menu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { StyledNav, Adder, Remover } from '../styles'

type NavProps = {
  addLowString: () => void
  removeLowString: () => void
  removeHighString: () => void
  addHighString: () => void
}

const Nav = ({
  addLowString,
  removeLowString,
  removeHighString,
  addHighString
}: NavProps) => {
  return (
    <StyledNav>
      <Adder onClick={addLowString} data-test="add-low-string">
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover onClick={removeLowString} data-test="remove-low-string">
        <FiChevronRight className="icon" />
      </Remover>
      <Menu />
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
