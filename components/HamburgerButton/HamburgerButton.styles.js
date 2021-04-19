import styled from 'styled-components'
import { mqw } from '../../styles/utils'

const hamburgerButton = styled.button`
  ${mqw[750]`
    display: none;
  `}

  border: none;
  background: none;
  position: absolute;
  top: 50%;
  right: 0;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  padding: 0;

  svg {
    width: 100%;
    height: 65%;
    color: white;

    path {
      stroke: white;
    }
  }
`

export default {
  hamburgerButton,
}
