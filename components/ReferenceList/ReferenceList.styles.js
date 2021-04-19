import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'

const referenceList = styled.ul`
  background: white;
  margin: 0;
  padding: ${space(8)};

  li {
    display: grid;
    gap: ${space(2)};
    border-bottom: 1px solid var(--clr-silver);
    padding: ${space(2)} 0;

    &:first-of-type {
      padding-top: 0;
    }

    ${mqw[750]`
      grid-template-columns: 0.3fr 1fr;
    `}

    img {
      display: none;
      max-height: 150px;
      width: 100%;
      object-fit: cover;
      border: 1px solid var(--clr-silver);

      ${mqw[750]`
        display: block;
      `}
    }
  }
`

const content = styled.div`
  h3 {
    ${fonts.fontBarlowMedium()}
    font-size: 3rem;
    margin-bottom: ${space(2)};

    a {
      color: var(--clr-cod-gray);
    }
  }
`

export default {
  referenceList,
  content,
}
