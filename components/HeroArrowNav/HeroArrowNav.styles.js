import styled from 'styled-components'
import { mqw, space } from '../../styles/utils'

const arrow = styled.button`
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
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }

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
