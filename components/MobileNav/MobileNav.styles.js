import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'

const mobileNav = styled.nav`
  ${mqw[750]`
    display: none;
  `}

  background: var(--clr-cod-gray) left top repeat;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 10%),
    url('/img/pattern_dark.svg');
  background-size: cover;
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 10%;

  ul {
    ${fonts.fontBarlowRegular()}
    display: flex;
    list-style: none;
    margin: 0;
    flex-direction: column;
    align-items: flex-end;

    li {
      text-transform: uppercase;
      font-size: 3rem;

      + li {
        margin-top: ${space(2)};
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
  mobileNav,
}
