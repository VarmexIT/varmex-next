import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const spinner = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`

export default {
  spinner,
}
