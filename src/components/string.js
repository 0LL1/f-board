import React, { Component } from 'react'
import Tone from '../components/tone'
import styled from 'styled-components'
// import * as Note from 'tonal-note'

const StyledString = styled.div`
  border: solid 1px;
  display: flex;
  flex-direction: column;
  .sharpen {
    background-color: green;
    font-size: 1rem;
    color: white;
  }
  .flatten {
    background-color: red;
    font-size: 1rem;
    color: white;
  }
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
        <button className='sharpen' onClick={this.sharpen}>
          +
        </button>
        <button className='flatten' onClick={this.flatten}>
          -
        </button>
        <Tone tone={this.state.tuning} />
        <Tone tone={this.state.tuning + 1} />
        <Tone tone={this.state.tuning + 2} />
        <Tone tone={this.state.tuning + 3} />
        <Tone tone={this.state.tuning + 4} />
        <Tone tone={this.state.tuning + 5} />
        <Tone tone={this.state.tuning + 6} />
        <Tone tone={this.state.tuning + 7} />
        <Tone tone={this.state.tuning + 8} />
        <Tone tone={this.state.tuning + 9} />
        <Tone tone={this.state.tuning + 10} />
        <Tone tone={this.state.tuning + 11} />
      </StyledString>
    )
  }
}

export default String
