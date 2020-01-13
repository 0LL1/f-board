import React from 'react'
import { useDispatch } from 'react-redux'
import Menu from './Menu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  addLowString,
  removeLowString,
  addHighString,
  removeHighString
} from '../state'
import { StyledNav, Adder, Remover } from '../styles'

const Nav = () => {
  const dispatch = useDispatch()

  return (
    <StyledNav>
      <Adder
        onClick={() => dispatch(addLowString())}
        data-test="add-low-string"
      >
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover
        onClick={() => dispatch(removeLowString())}
        data-test="remove-low-string"
      >
        <FiChevronRight className="icon" />
      </Remover>
      <Menu />
      <Remover
        onClick={() => dispatch(removeHighString())}
        data-test="remove-high-string"
      >
        <FiChevronLeft className="icon" />
      </Remover>
      <Adder
        onClick={() => dispatch(addHighString())}
        data-test="add-high-string"
      >
        <FiChevronRight className="icon" />
      </Adder>
    </StyledNav>
  )
}

export default Nav
