import styled from 'styled-components'
import { space, mqw, fonts } from '../../styles/utils'
import Section from '../Section/Section'

const newsSection = styled(Section)`
  background: white;

  .inner {
    display: flex;
    flex-direction: column;

    ${mqw[750]`
      flex-direction: row;
    `}

    .newsItemsWrapper {
      display: flex;
      flex-direction: column;
      flex: 1;

      .readMoreNews {
        ${fonts.fontBarlowRegular()}
        background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top repeat;
        background-size: cover;
        text-transform: uppercase;
        color: white;
        font-size: 2.5rem;
        padding: ${space(2)};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.3s;

        svg {
          margin-left: ${space(1)};
          margin-bottom: -2px;
          font-size: 2.4rem;
          color: white;
          transition: transform 0.3s;
        }

        &:hover {
          color: var(--clr-green);

          svg {
            transform: translateX(${space(1)});
          }
        }
      }
    }
  }
`

export default {
  newsSection,
}
