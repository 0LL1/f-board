import React, { Component } from 'react'
import String from '../components/string'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
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
      ],
      selected: []
    }
  }

  select = e => {
    // e.preventDefault()
    this.setState(state => {
      return { selected: state.selected.concat(Note.pc(e)) }
    })
  }

  render() {
    const strings = this.state.tuning.map(tuning => (
      <String
        tuning={tuning}
        selected={this.state.selected}
        select={this.select}
      />
    ))
    return <StyledFingerboard>{strings}</StyledFingerboard>
  }
}

export default Fingerboard
