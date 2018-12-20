import React from 'react'
import styled from 'styled-components'
import * as Note from 'tonal-note'

const StyledTone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  height: 3rem;
  width: 3rem;
`

const Tone = props => {
  const tone = Note.fromMidi(props.tone)

  return <StyledTone>{Note.pc(tone)}</StyledTone>
}

export default Tone
