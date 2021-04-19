import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'
import Section from '../Section/Section'

const materialSection = styled(Section)`
  background: white;

  .inner {
    display: flex;
    flex-direction: column;

    img {
      max-height: 340px;
      width: 100%;
      object-fit: cover;
    }

    ${mqw[750]`
      flex-direction: row;

      img,
      .body {
        width: 50%;
      }

      img {
        max-height: none;
      }
    `}

    .body {
      padding: ${space(4)};

      ${mqw[900]`
        padding: ${space(8)};
      `}

      ${mqw[1000]`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}

      h3 {
        ${fonts.fontBarlowMedium()}
        font-size: 3rem;
        margin: 0 0 ${space(2)} 0;
      }

      .manualLinkWrapper {
        display: block;
        text-align: right;
        margin-top: ${space(2)};

        a {
          ${fonts.fontBarlowMedium()}
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: var(--clr-cod-gray);
          font-size: 2.4rem;
          text-transform: uppercase;

          transition: color 0.3s;

          svg {
            margin-left: ${space(1)};
            margin-bottom: -2px;
            transition: transform 0.3s;
            color: var(--clr-cod-gray);
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
  }
`

export default {
  materialSection,
}
