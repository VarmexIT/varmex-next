import styled from 'styled-components'
import Container from '../Container/Container'
import { mqw, fonts, space } from '../../styles/utils'

const varmehandbok = styled(Container)`
  background: white;
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    object-position: top;
    border-bottom: 1px solid var(--clr-silver);
  }
`

const content = styled.div`
  padding: ${space(2)};
  padding-right: ${space(8)};
  overflow: hidden;

  ${mqw[900]`
    padding: ${space(8)};
  `}

  h1,
  h2 {
    ${fonts.fontBarlowMedium()}
    font-size: 4rem;
    line-height: 1;
    margin-bottom: ${space(4)};
  }

  h2 {
    font-size: 3rem;
  }
`

const nav = styled.nav`
  position: absolute;
  left: 2.5%;
  top: ${space(4)};
  width: 95%;
  z-index: 1;

  ${mqw[750]`
    left: unset;
    right: 20px;
    width: fit-content;
  `}

  .inner {
    position: relative;
    background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top no-repeat;
    background-size: cover;
    padding: ${space(2)};
    border-radius: ${space(2)};

    .title {
      position: absolute;
      top: 50%;
      left: -75px;
      transform: rotate(-90deg) translateX(10px);
      text-transform: uppercase;
      ${fonts.fontBarlowMedium()};
      color: white;
      font-size: 2.5rem;
      white-space: nowrap;
      padding: 0;
      margin: 0;
      background: none;
      border: none;
    }

    .content {
      padding-left: 40px;

      ul {
        list-style: none;
        padding: 0;
        text-align: left;
        ${fonts.fontBarlowMedium()};

        li {
          font-size: 2.4rem;
          cursor: default;

          a {
            color: white;
          }

          + li {
            margin-top: ${space(2)};
          }

          ul {
            li {
              font-size: 2rem;
              padding-left: ${space(2)};
              margin-top: ${space(1)};

              a {
                color: var(--clr-nobel);
              }
            }
          }
        }
      }
    }
  }
`

export default {
  varmehandbok,
  content,
  nav,
}
