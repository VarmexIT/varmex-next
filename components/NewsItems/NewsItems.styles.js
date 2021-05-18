import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'

const newsItems = styled.div`
  display: flex;
  overflow-x: scroll;

  ${mqw[750]`
    flex-direction: column;
    flex: 1;
  `}

  article {
    padding: ${space(2)};
    display: flex;
    height: 150px;
    width: 400px;
    max-width: 93%;
    flex: 0 0 auto;

    + article {
      border: 1px solid var(--clr-nobel);
      border-width: 0 0 0 1px;
    }

    ${mqw[750]`
      width: auto;
      height: auto;
      max-width: none;
      flex: 1;

      + article {
        border-width: 1px 0 0 0;
      }
    `}

    img {
      width: 30%;
      /* height: intrinsic; */
      object-fit: cover;
      margin-right: ${space(2)};
      border: 1px solid var(--clr-nobel);
    }
  }
`

const content = styled.div`
  ${mqw[600]`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -10px;
  `}

  h3 {
    ${fonts.fontBarlowMedium()}
    margin-bottom: ${space(1)};
    font-size: 2.2rem;

    a {
      color: var(--clr-cod-gray);
    }
  }

  .excerpts {
    font-size: 1.6rem;
    line-height: 1.2;
  }
`

export default {
  newsItems,
  content,
}
