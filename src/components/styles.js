import styled, { createGlobalStyle } from 'styled-components'

// Variables
const colors = {
  light: '#ffffff',
  dark: '#111111',
  grey: '#444444',
  plus: '#3d9970',
  plusdark: '#2d7254',
  minus: '#ff4136',
  minusdark: '#b90a00',
  highlight: '#FF851B'
}

const vars = {
  smallBoxShadow: '0px 5px 10px 0 rgba(0, 0, 0, 0.3)',
  bigBoxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.3)',
  transition: 'all 0.125s ease-in-out'
}

// Global style
const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.light};
    font-size: 16px;
  }
  body {
    display: grid;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.dark};
    user-select: none;
    cursor: default;
  }
  button:focus {
    outline: none;
  }
  `

// Layout containers/wrappers
const StyledApp = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background-color: ${colors.light};
  background-size: 100%;
`
const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: ${colors.grey};
  box-shadow: ${vars.smallBoxShadow};
`
const StyledString = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledNav = styled.div`
  display: flex;
  width: 19.2rem;
  height: 2.4rem;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: calc(50% - 9.6rem);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${colors.light};
  color: ${colors.dark};
  box-shadow: ${vars.bigBoxShadow};
`
const StyledMenu = styled.div``

// Components
const BaseButton = styled.button`
  border: none;
  width: 3.2rem;
  font-size: 1.2rem;
  background-color: #00000000;
  /* box-shadow: ${vars.boxShadow}; */
  transition: ${vars.transition};
  .icon {
    vertical-align: middle;
  }
  :hover {
    /* transform: scale(1.1); */
  }
  `
const Menu = styled(BaseButton)``
const Adder = styled(BaseButton)``
const Remover = styled(BaseButton)``
const InstrumentToggle = styled(BaseButton)``
const AccidentalToggle = styled(BaseButton)``
const SoundToggle = styled(BaseButton)``
const Sharpen = styled(BaseButton)`
  height: 1.8rem;
  width: 100%;
  background-color: ${colors.light};
  color: ${colors.dark};
  /* :hover {
    transform: none;
    background-color: ${colors.plus};
  } */
`
const Flatten = styled(Sharpen)`
  /* :hover {
    background-color: ${colors.minus};
  } */
`
const NotePosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  border-radius: ${props => props.selected && '50%'};
  margin: 0;
  font-size: ${props => (props.selected ? '1.4rem' : '1rem')};
  color: ${props => (props.selected ? colors.highlight : colors.dark)};
  transition: ${vars.transition};
  svg {
    position: absolute;
  }
  :nth-child(1) {
    height: 1.8rem;
    background-color: ${colors.light};
    border-radius: 0;
    svg {
      display: none;
    }
  }
  :hover {
    color: ${colors.highlight};
    font-size: 1.4rem;
  }
`

export {
  colors,
  vars,
  GlobalStyle,
  StyledApp,
  StyledFingerboard,
  StyledString,
  StyledNav,
  StyledMenu,
  BaseButton,
  Menu,
  Adder,
  Remover,
  InstrumentToggle,
  AccidentalToggle,
  SoundToggle,
  Sharpen,
  Flatten,
  NotePosition
}
