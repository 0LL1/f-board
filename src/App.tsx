import React from 'react'
import Fingerboard from './components/Fingerboard'
import Nav from './components/Nav'
import { GlobalStyle, StyledApp } from './helpers/styles'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Fingerboard />
      <Nav />
    </StyledApp>
  )
}

export default App
