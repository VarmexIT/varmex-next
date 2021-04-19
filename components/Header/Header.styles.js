import styled from 'styled-components'
import { space, mqw } from '../../styles/utils'

const header = styled.header`
  background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top repeat;
  background-size: cover;
  color: white;
  width: 100%;
  height: var(--header-height);
  padding: ${space(3)};
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2);

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    ${mqw[750]`
      justify-content: space-between;
    `}

    ${mqw.max`
      padding-left: ${space(3)};
      padding-right: ${space(3)};
    `}
    
    ${mqw[1100]`
      flex-direction: row;
      align-items: flex-end;
    `}

    .logoLink {
      cursor: pointer;

      img {
        width: clamp(120px, 17vw, 200px);
      }
    }
  }
`

export default {
  header,
}
