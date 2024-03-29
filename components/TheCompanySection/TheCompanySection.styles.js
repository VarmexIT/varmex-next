import styled from 'styled-components'
import { space, mqw, fonts } from '../../styles/utils'
import Section from '../Section/Section'

const theCompanySection = styled(Section)`
  .inner {
    .content {
      background: white;
      display: flex;
      flex-direction: column;

      ${mqw[900]`
        flex-direction: row-reverse;
      `}

      .image {
        max-height: 340px;
        object-fit: cover;

        ${mqw[900]`
          max-height: none;
          width: 50%;
        `}
      }

      .body {
        padding: ${space(4)};

        h3 {
          ${fonts.fontBarlowMedium()}
          font-size: 3rem;
          margin-bottom: ${space(2)};
        }

        ${mqw[900]`
          padding: ${space(8)} ${space(8)} ${space(10)} ${space(8)};
          width: 50%;
        `}
      }
    }
  }
`

export default {
  theCompanySection,
}
