import styled from 'styled-components'
import { space, mqw, fonts } from '../../styles/utils'

const heroItem = styled.div`
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .metaWrapper {
    height: 100%;
    background: rgba(0, 0, 0, 0.45);

    &.noDimmed {
      background: transparent;
    }

    .container {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: ${space(6)};
      padding-right: ${space(6)};
      height: 100%;

      ${mqw[750]`
        padding-left: ${space(10)};
        padding-right: ${space(10)};
      `}

      h2 {
        ${fonts.fontBarlowRegular()}
        line-height: 1;
        font-size: 4rem;
        max-width: 650px;
        text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

        ${mqw[900]`
          ${fonts.fontBarlowMedium()}
          font-size: 5rem;
          line-height: 1.2;
        `}
      }

      a,
      h3 {
        ${fonts.fontBarlowRegular()}
        margin-top: ${space(2)};
        font-size: 2.8rem;
        color: var(--clr-green);
        border-bottom: 2px solid transparent;
        transition: border-color 0.3s;
        text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

        ${mqw[900]`
          font-size: 4rem;
        `}
      }

      a:hover {
        border-color: var(--clr-green);
      }
    }
  }
`

export default {
  heroItem,
}
