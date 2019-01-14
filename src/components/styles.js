import styled, { createGlobalStyle } from 'styled-components'

// Variables
export const colors = {
  light: '#ffffff',
  dark: '#333333',
  grey: '#888888',
  highlight: '#FF851B',
  lighter: '#ffd268',
  transparent: '#00000000'
}

export const vars = {
  length: '2.4rem',
  smallBoxShadow: '0px 5px 10px 0 rgba(0, 0, 0, 0.3)',
  bigBoxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.3)',
  transition: 'all 0.175s ease-in-out'
}

// Global style
export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.lighter};
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
  .icon {
    vertical-align: middle;
  }
`

//Components
export const StyledApp = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background-color: ${colors.lighter};
  background-size: 100%;
`

export const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: ${colors.dark};
  box-shadow: ${vars.smallBoxShadow};
`

export const StyledString = styled.div`
  display: flex;
  flex-direction: column;
`

export const NotePosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${vars.length};
  height: ${vars.length};
  border: none;
  font-size: ${props => (props.selected ? '1.4rem' : '1rem')};
  color: ${props => (props.selected ? colors.highlight : colors.grey)};
  transition: ${vars.transition};
  svg {
    position: absolute;
  }
  :nth-child(1) {
    height: calc(3 / 4 * ${vars.length});
    background-color: ${colors.dark};
    border-bottom: 0.1rem solid;
    border-color: ${colors.grey};
    svg {
      display: none;
    }
  }
  :hover {
    color: ${colors.highlight};
    font-size: 1.4rem;
  }
`

export const StyledNav = styled.div`
  display: flex;
  width: calc(8 * ${vars.length});
  height: ${vars.length};
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: calc(50% - 4 * ${vars.length});
  border-radius: 10px 10px 0 0;
  background-color: ${colors.light};
  color: ${colors.dark};
  box-shadow: ${vars.bigBoxShadow};
`

export const StyledMenu = styled.div`
  position: fixed;
  width: calc(8 / 5 * ${vars.length});
  bottom: ${vars.length};
  left: calc(50% - 8 / 5 / 2 * ${vars.length});
`

export const BaseButton = styled.button`
  border: none;
  width: 100%;
  background-color: ${colors.transparent};
  font-size: 1.2rem;
  transition: ${vars.transition};
  :hover {
    color: ${colors.highlight};
  }
`

export const MenuIcon = styled(BaseButton)`
  background-color: ${colors.light};
  display: block;
  height: ${vars.length};
`

export const Adder = styled(BaseButton)``

export const Remover = styled(BaseButton)``

export const SoundToggle = styled(MenuIcon)`
  border-radius: 10px 10px 0 0;
`

export const AccidentalToggle = styled(MenuIcon)`
  border-bottom: 0.1rem solid;
  border-color: ${colors.grey};
`

export const Instrument = styled(MenuIcon)``

export const Sharpen = styled(BaseButton)`
  background-color: ${colors.light};
  height: calc(3 / 4 * ${vars.length});
`

export const Flatten = styled(BaseButton)`
  background-color: ${colors.light};
  height: calc(3 / 4 * ${vars.length});
`
