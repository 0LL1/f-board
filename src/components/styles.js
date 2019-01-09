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
  highlight: '#FF851B',
  background: '#FF851B'
}

const vars = {
  boxShadow: '5px 5px 50px 0 rgba(0, 0, 0, 0.5)'
}

//Global style
const Globalstyle = createGlobalStyle`
  html {
    background-color: ${colors.dark}
  }
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  user-select: none;
  cursor: default;
  background: linear-gradient(to right bottom, #ff851b, #ee6c10, #dd5206, #cb3501, #b90a00);
}
button:focus {
  outline: none;
}
`

//Components
const BaseButton = styled.button`
  align-self: center;
  border: none;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1rem;
  box-shadow: ${vars.boxShadow};
  :hover {
    transform: scale(1.1);
  }
`
const Adder = styled(BaseButton)`
  grid-row-start: 9;
  background-color: ${colors.plus};
  color: ${colors.light};
`
const Remover = styled(BaseButton)`
  grid-row-start: 10;
  background-color: ${colors.minus};
  color: ${colors.light};
`
const FretCountChanger = styled(BaseButton)`
  grid-row-start: 15;
  background-color: ${colors.light};
  color: ${colors.dark};
  font-size: 1.5rem;
`
const InstrumentToggle = styled(FretCountChanger)`
  grid-row-start: 4;
`
const AccidentalToggle = styled(BaseButton)`
  grid-row-start: 4;
  background-color: ${colors.light};
  color: ${colors.dark};
`
const Sharpen = styled(BaseButton)`
  height: 1.8rem;
  width: 100%;
  border-radius: 0;
  box-shadow: none;
  background-color: ${colors.plus};
  color: ${colors.light};
  :hover {
    transform: none;
    background-color: ${colors.plusdark};
  }
`
const Flatten = styled(Sharpen)`
  background-color: ${colors.minus};
  :hover {
    background-color: ${colors.minusdark};
  }
`
const NotePosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border: none;
  border-radius: ${props => props.selected && '50%'};
  margin: 0;
  font-size: ${props => (props.selected ? '1.4rem' : '1rem')};
  color: ${props => (props.selected ? colors.highlight : colors.dark)};
  :nth-child(1) {
    height: 1.8rem;
    background-color: ${colors.light}
    border-radius: 0;
  }
  :hover {
    color: ${colors.highlight};
    font-size: 1.4rem;
  }
`

export {
  colors,
  vars,
  Globalstyle,
  BaseButton,
  Adder,
  Remover,
  FretCountChanger,
  InstrumentToggle,
  AccidentalToggle,
  Sharpen,
  Flatten,
  NotePosition
}
