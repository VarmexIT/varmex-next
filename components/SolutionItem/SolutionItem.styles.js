import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'

const title = styled.dt`
  display: flex;
  transition: border-bottom-color 0.2s;
  margin: 0 ${space(3)};

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--clr-silver);
  }

  &.active {
    border-bottom-color: transparent;
  }

  button {
    ${fonts.fontGeorgiaRegular()}
    text-align: right;
    flex: 1;
    border: none;
    background: none;
    font-size: 1.8rem;
    margin: 0;
    padding: ${space(2)} 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(-clr-cod-gray);
    -webkit-font-smoothing: antialiased;

    ${mqw[900]`
      font-size: 1.4rem;
    `}

    ${mqw[1100]`
      font-size: 1.8rem;
    `}

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      margin-left: ${space(2)};
      color: var(--clr-cod-gray);
    }
  }
`

const body = styled.dd`
  margin: 0;
  overflow: hidden;

  .inner2 {
    padding: 0 ${space(6)};

    p {
      margin: ${space(1)} 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`

export default {
  title,
  body,
}
