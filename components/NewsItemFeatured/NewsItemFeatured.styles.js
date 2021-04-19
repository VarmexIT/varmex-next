import styled from 'styled-components'
import { mqw, fonts, space } from '../../styles/utils'

const newsItemFeatured = styled.article`
  border: 1px solid var(--clr-nobel);
  border-width: 0 0 1px 0;

  ${mqw[750]`
    flex: 1;
    border-width: 0 1px 0 0;
  `}

  img {
    max-height: 250px;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid var(--clr-nobel);
  }
`

const content = styled.div`
  padding: ${space(4)};

  h3 {
    ${fonts.fontBarlowMedium()}
    font-size: 3rem;
    margin-bottom: ${space(2)};

    a {
      color: var(--clr-cod-gray);
    }
  }

  .preamble {
    margin-top: ${space(1)};
    line-height: 1.5;
  }
`

export default {
  newsItemFeatured,
  content,
}
