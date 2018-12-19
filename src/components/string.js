import React, { Component } from 'react'
import Tone from '../components/tone'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledString = styled.div`
  border: solid 1px;
  display: flex;
  flex-direction: column;
`
class String extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tuning: props.tuning
    }
  }

  sharpen = () => {
    this.setState(state => {
      return { tuning: state.tuning + 1 }
    })
  }

  flatten = () => {
    this.setState(state => {
      return { tuning: state.tuning - 1 }
    })
  }

  render() {
    return (
      <StyledString>
        <button onClick={this.sharpen}>+</button>
        <button onClick={this.flatten}>-</button>
        <Tone tone={this.state.tuning} />
        <Tone tone={this.state.tuning + 1} />
        <Tone tone={this.state.tuning + 2} />
      </StyledString>
    )
  }
}

export default String
