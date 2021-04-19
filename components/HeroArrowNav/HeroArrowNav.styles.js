import styled from 'styled-components'
import { mqw, space } from '../../styles/utils'

const arrow = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.8);
  padding: 0;

  &.prev {
    left: 0;

    ${mqw[750]`
      left: ${space(2)};
    `}
  }

  &.next {
    right: 0;

    ${mqw[750]`
      right: ${space(2)};
    `}
  }
`

export default {
  arrow,
}
