import React, { Component } from 'react'
import styled from 'styled-components'
import Fingerboard from './components/fingerboard'
// import * as Note from 'tonal-note'

const StyledApp = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <StyledApp>
        <Fingerboard selected={this.state.selected} />
      </StyledApp>
    )
  }
}

export default App
