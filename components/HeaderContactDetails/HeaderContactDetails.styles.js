import styled from 'styled-components'
import { space, fonts, mqw } from '../../styles/utils'

const headerContactDetails = styled.div`
  ${fonts.fontBarlowRegular()}
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  display: none;

  ${mqw[750]`
    display: flex;
  `}

  a {
    display: flex;
    align-items: center;
    color: var(--clr-nobel);
    margin-right: ${space(2)};
    transition: color 0.3s;

    &:hover {
      color: white;
    }

    &:last-of-type {
      margin-right: 0;

      .icon {
        margin-right: 0;
      }
    }

    .icon {
      margin-right: ${space(1)};
      color: var(--clr-green);
      width: 20px;
    }
  }
`

export default {
  headerContactDetails,
}
