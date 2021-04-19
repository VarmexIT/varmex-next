import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'
import Section from '../Section/Section'

const contactSection = styled(Section)`
  background: white;

  .inner {
    display: flex;
    flex-direction: column;

    ${mqw[750]`
      flex-direction: row-reverse;
    `}

    .contactInfo {
      ${fonts.fontBarlowMedium()}
      font-size: 2.5rem;
      background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top repeat;
      background-size: cover;
      color: white;
      padding: ${space(9)} ${space(3)};
      box-shadow: 0 0 0 black;

      .section {
        margin-bottom: ${space(6)};
        text-align: center;

        h3,
        h4 {
          ${fonts.fontBarlowMedium()}
          font-size: 3rem;
          margin: 0;
        }

        p {
          white-space: pre-wrap;
        }
      }

      ${mqw[750]`
        flex-basis: 33.333%;
      `}
    }
  }

  .formDetails {
    position: relative;
    overflow: hidden;
    padding: ${space(4)};

    .contactUsText {
      ${fonts.fontBarlowMedium()}
      font-size: 3rem;
    }

    ${mqw[750]`
      flex-basis: 66.666%;
    `}

    .notification {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

      h4 {
        ${fonts.fontBarlowMedium()}
        text-transform: uppercase;
        font-size: 3rem;
        margin: 0 0 ${space(2)} 0;
      }

      p {
        ${fonts.fontBarlowRegular()}
        font-size: 2rem;
      }

      &.success {
        background: var(--clr-green);
      }

      &.error {
        background: var(--clr-error-red-background);
      }
    }
  }
`

export default {
  contactSection,
}
