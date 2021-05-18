import styled from 'styled-components'
import { mqw, fonts, space } from '../../styles/utils'

const boilerplate = styled.div`
  color: var(--clr-nobel);
  background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top no-repeat;
  background-size: 100%;
  padding: ${space(4)};
  text-align: center;

  ${mqw[750]`
    padding: ${space(4)} ${space(6)} ${space(4)} ${space(6)};
  `}

  .boilerplateInner {
    max-width: 800px;
    margin: 0 auto;

    h2 {
      color: white;
      ${fonts.fontBarlowMedium()}
      font-size: 3rem;
      margin-bottom: ${space(2)};
    }

    ul {
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-areas:
        'g1 g2'
        'g3 g4';

      grid-template-columns: repeat(2, minmax(0, 1fr));

      ${mqw[750]`
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-areas:
        'g1 g2 g3 g4'
      `}

      li {
        display: flex;
        text-align: left;
        align-items: center;

        .number {
          color: white;
          font-size: 3.5rem;
          text-align: right;
          margin-right: ${space(1)};
          width: 25%;
          ${fonts.fontBarlowMedium()}

          ${mqw[750]`
            font-size: 4.5rem;
          `}
        }

        .text {
          width: 75%;
        }
      }
    }
  }
`

export default {
  boilerplate,
}
