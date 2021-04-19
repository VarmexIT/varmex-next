import styled from 'styled-components'
import { space } from '../../styles/utils'

const heroDotNav = styled.div`
  position: absolute;
  width: 100%;
  bottom: ${space(3)};
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 200px;

    li {
      line-height: 0;

      + li {
        margin-left: ${space(2)};
      }

      button {
        border-radius: 50%;
        background: transparent;
        border: 3px solid white;
        width: 14px;
        height: 14px;
        padding: 0;
        transition: background 0.6s;

        &.current {
          background: white;
        }
      }
    }
  }
`

export default {
  heroDotNav,
}
