import styled from 'styled-components'
import { mqw, space } from '../../styles/utils'

const withImage = styled.div`
  display: flex;
  flex-direction: column;

  &.placeTop {
    flex-direction: column-reverse;
  }

  ${mqw[750]`
    &.right {
      flex-direction: row;

      figure {
        margin-left: ${space(2)};
      }
    }

    &.left {
      flex-direction: row-reverse;

      figure {
        margin-right: ${space(2)};
      }
    }

    &.vCenter {
      align-items: center;
    }
  `}

  div > p {
    margin-top: ${space(3)};
  }

  figure {
    margin-top: ${space(2)};
    margin-bottom: ${space(2)};
    min-width: 250px;
    text-align: center;

    img {
      max-width: 800px;
      width: 100%;
    }

    figcaption {
      text-align: left;

      &.center {
        text-align: center;
      }
    }
  }
`

export default {
  withImage,
}
