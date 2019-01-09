import styled from 'styled-components'

// Variables
const colors = {
  light: '#ffffff',
  dark: '#111111',
  grey: '#333333',
  green: '#3d9970',
  red: '#ff4136',
  highlight: '#0074D9'
}

//Components
const BaseButton = styled.button`
  cursor: pointer;
  align-self: center;
  border: none;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1rem;
`
const Adder = styled(BaseButton)`
  grid-row-start: 9;
  background-color: ${colors.green};
  color: ${colors.light};
`
const Remover = styled(BaseButton)`
  grid-row-start: 10;
  background-color: ${colors.red};
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
  background-color: ${colors.green};
  color: ${colors.light};
`
const Flatten = styled(Sharpen)`
  background-color: ${colors.red};
`
const NotePosition = styled.div`
  cursor: pointer;
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
`

export {
  colors,
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
