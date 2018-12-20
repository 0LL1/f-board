import React, { Component } from 'react'
import String from '../components/string'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledFingerboard = styled.div`
  border: solid 1px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`

class Fingerboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tuning: [
        Note.midi(64),
        Note.midi(69),
        Note.midi(74),
        Note.midi(79),
        Note.midi(83),
        Note.midi(88)
      ]
    }
  }
  render() {
    return (
      <StyledFingerboard>
        <String tuning={this.state.tuning[0]} />
        <String tuning={this.state.tuning[1]} />
        <String tuning={this.state.tuning[2]} />
        <String tuning={this.state.tuning[3]} />
        <String tuning={this.state.tuning[4]} />
        <String tuning={this.state.tuning[5]} />
      </StyledFingerboard>
    )
  }
}

export default Fingerboard
