import styled from 'styled-components'
import { space, mqw, fonts } from '../../styles/utils'

const desktopNav = styled.nav`
  display: none;
  position: relative;
  z-index: 1;

  ${mqw[750]`
    display: block;
  `}

  ul {
    ${fonts.fontBarlowRegular()}
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: margin-bottom 0.3s;

    li {
      text-transform: uppercase;
      font-size: 2rem;

      ${mqw[900]`
        font-size: 2.4rem;
      `}

      + li {
        margin-left: ${space(2)};
      }

      a {
        color: white;
        transition: color 0.3s;

        &:hover,
        &.active {
          color: var(--clr-green);
        }
      }
    }
  }
`

export default {
  desktopNav,
}
