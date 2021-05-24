import styled from 'styled-components'
import Container from '../Container/Container'
import { mqw, fonts, space } from '../../styles/utils'

const varmehandbok = styled(Container)`
  background: white;

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
  position: relative;
  padding: ${space(2)};
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
  top: ${space(2)};
  right: ${space(2)};
  /* transform: translateX(90%); */
  display: flex;
  justify-content: flex-end;
  transition: transform 0.5s;
  width: 430px;

  /* &:hover {
    transform: translateX(0%);
  } */

  .inner {
    position: relative;
    color: var(--clr-nobel);
    background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top no-repeat;
    background-size: 100%;
    padding: ${space(2)};
    border-radius: ${space(2)};

    .title {
      position: absolute;
      top: 50%;
      left: -25px;
      transform: rotate(-90deg) translateX(10px);
      text-transform: uppercase;
      ${fonts.fontBarlowMedium()};
      color: var(--silver);
      font-size: 2.5rem;
    }

    .content {
      padding-left: 40px;

      ul {
        list-style: none;
        padding: 0;
        text-align: left;
        ${fonts.fontBarlowMedium()};

        li {
          color: white;
          font-size: 2.4rem;

          + li {
            margin-top: ${space(2)};
          }

          ul {
            li {
              font-size: 2rem;
              color: var(--clr-nobel);
              padding-left: ${space(2)};
              margin-top: ${space(1)};
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
