import React from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledTone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  height: 4rem;
  width: 4rem;
`

const Tone = props => {
  return <StyledTone>{Note.fromMidi(props.tone)}</StyledTone>
}

export default Tone
