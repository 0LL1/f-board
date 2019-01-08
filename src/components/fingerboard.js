import React, { Component } from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'
import String from '../components/string'

const StyledFingerboard = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
`

class Fingerboard extends Component {
  state = {
    tuning: [64, 69, 74, 79, 83, 88],
    fretCount: 13,
    selected: new Set()
  }

  select = tone => {
    !this.state.selected.has(Note.pc(tone))
      ? this.setState(
          prevState => new Set(prevState.selected.add(Note.pc(tone)))
        )
      : this.setState(prevState => {
          prevState.selected.delete(Note.pc(tone))
          new Set(prevState.selected)
          this.forceUpdate()
        })
  }

  render() {
    const strings = this.state.tuning.map(tuning => (
      <String
        key={tuning}
        tuning={tuning}
        fretCount={this.state.fretCount}
        selected={this.state.selected}
        select={this.select}
      />
    ))
    return <StyledFingerboard>{strings}</StyledFingerboard>
  }
}

export default Fingerboard
