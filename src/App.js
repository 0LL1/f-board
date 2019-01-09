import React from 'react'
import styled from 'styled-components'
import Fingerboard from './components/fingerboard'

const StyledApp = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #111111;
`

const App = () => {
  return (
    <StyledApp>
      <Fingerboard />
    </StyledApp>
  )
}

export default App
