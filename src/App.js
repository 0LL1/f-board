import React from 'react'
import styled from 'styled-components'
import Fingerboard from './components/fingerboard'
import { colors, Globalstyle } from './components/styles'

const StyledApp = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <StyledApp>
      <Globalstyle />
      <Fingerboard />
    </StyledApp>
  )
}

export default App
