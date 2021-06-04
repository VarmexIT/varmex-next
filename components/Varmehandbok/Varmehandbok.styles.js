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

  > div {
    &:first-of-type {
      h2 {
        margin-top: 0;
      }
    }

    h2,
    h3 {
      ${fonts.fontBarlowMedium()};
      font-size: 3rem;
      line-height: 1;
      margin: ${space(4)} 0;
    }

    h3 {
      font-size: 2.5rem;
      margin: ${space(2)} 0 ${space(1)} 0;
    }

    ol {
      list-style: none;
      counter-reset: count;
      position: relative;
      padding: 0;

      li {
        counter-increment: count;
        position: relative;
        padding-left: ${space(10)};

        + li {
          margin-top: ${space(8)};
        }

        &::before {
          content: counter(count);
          position: absolute;
          top: 0;
          left: 0;
          font-size: 16rem;
          ${fonts.fontBarlowMedium()};
          color: var(--clr-nobel);
          line-height: 0.6;
          opacity: 0.5;
          text-align: right;
        }
      }
    }
  }
`

const nav = styled.nav`
  position: fixed;
  top: calc(var(--header-height) + ${space(1)});
  left: ${space(1)};
  width: calc(100% - ${space(2)});
  z-index: 1;

  ${mqw[750]`
    left: unset;
    right: ${space(1)};
    width: fit-content;
  `}

  ${mqw[2000]`
    left: unset;
    right: ${space(1)};
    width: fit-content;
  `}

  .inner {
    position: relative;
    background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top no-repeat;
    background-size: cover;
    padding: ${space(2)};
    border-radius: ${space(2)};
    overflow: hidden;
    max-height: 85vh;
    overflow-y: scroll;

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
