import React from 'react'
import Fingerboard from './components/fingerboard'
import { Globalstyle, StyledApp } from './components/styles'

const App = () => {
  return (
    <StyledApp>
      <Globalstyle />
      <Fingerboard />
    </StyledApp>
  )
}

export default App
