import React from "react";
import { useDispatch } from "react-redux";
import Menu from "./Menu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  addLowString,
  removeLowString,
  addHighString,
  removeHighString,
} from "../helpers/state";
import { StyledNav, Adder, Remover } from "../helpers/styles";

const Nav: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <StyledNav>
      <Adder
        onClick={(): { type: string; payload: undefined } =>
          dispatch(addLowString())
        }
        data-test="add-low-string"
      >
        <FiChevronLeft className="icon" />
      </Adder>
      <Remover
        onClick={(): { type: string; payload: undefined } =>
          dispatch(removeLowString())
        }
        data-test="remove-low-string"
      >
        <FiChevronRight className="icon" />
      </Remover>
      <Menu />
      <Remover
        onClick={(): { type: string; payload: undefined } =>
          dispatch(removeHighString())
        }
        data-test="remove-high-string"
      >
        <FiChevronLeft className="icon" />
      </Remover>
      <Adder
        onClick={(): { type: string; payload: undefined } =>
          dispatch(addHighString())
        }
        data-test="add-high-string"
      >
        <FiChevronRight className="icon" />
      </Adder>
    </StyledNav>
  );
};

export default Nav;
