import styled from 'styled-components'
import { mqw, fonts } from '../../styles/utils'

const referenceItem = styled.a`
  cursor: pointer;
  ${fonts.fontBarlowBold()}
  position: relative;
  flex-basis: 50%;
  height: clamp(200px, 30vw, 300px);
  background-size: cover;
  background-position: center;
  border: 0;
  padding: 0;
  font-size: clamp(2.6rem, 4vw, 3.5rem);

  ${mqw[900]`
    flex-basis: calc(100% / 3);

    &:hover {
      span {
        opacity: 1;
      }
    }
  `}

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s;

    ${mqw[900]`
      opacity: 0;
    `}

    h3 {
      ${fonts.fontBarlowMedium()}
      text-transform: uppercase;
      padding: 0;
      margin: 0;
      text-align: center;
      color: #eee;
    }
  }
`

export default {
  referenceItem,
}
