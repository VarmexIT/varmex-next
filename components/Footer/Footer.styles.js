import styled from 'styled-components'
import { fonts, space, mqw } from '../../styles/utils'

const footer = styled.footer`
  background: var(--clr-cod-gray) url('/img/pattern_dark.svg') left top repeat;
  background-size: cover;
  padding: ${space(4)} 0;
  color: white;

  nav {
    display: flex;
    justify-content: space-between;
    padding: ${space(4)} 10% ${space(5)} 10%;

    ${mqw[900]`
      padding-bottom: 0;
      flex: 1;
      justify-content: space-evenly;
    `}

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      margin: 0;
      list-style: none;

      li {
        ${fonts.fontBarlowRegular()}
        text-transform: uppercase;
        font-size: 2.4rem;

        + li {
          margin-top: ${space(4)};
        }

        a {
          color: white;
          white-space: nowrap;
        }
      }
    }
  }

  .offices {
    margin-top: ${space(4)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${space(6)};

    ${mqw[750]`
      margin-top: ${space(8)};
      flex-direction: row;
    `}

    .office {
      + .office {
        margin-top: ${space(4)};

        ${mqw[750]`
          margin-top: 0;
        `}
      }

      img {
        max-height: 400px;
        width: 100%;
        object-fit: cover;
      }

      .address {
        ${fonts.fontBarlowRegular()}
        font-size: 2.4rem;
        padding: ${space(1)} 10%;
        white-space: pre-wrap;

        p {
          line-height: 1.3;
        }
      }

      ${mqw[750]`
        &:first-of-type {
          margin-right: ${space(2)};
        }

        &:last-of-type {
          margin-left: ${space(2)};
        }
      `}
    }
  }

  .companyInfo {
    ${fonts.fontBarlowMedium()}
    border-top: 1px solid var(--clr-silver);
    padding-top: ${space(6)};
    margin: 0 10%;
    text-align: center;

    ${mqw[750]`
      margin: 0 auto;
    `}

    h2 {
      ${fonts.fontBarlowRegular()}
      font-size: 4rem;
      margin-bottom: ${space(4)};
    }

    .phoneAndEmail {
      display: flex;
      justify-content: center;
      font-size: 2.7rem;
      margin-bottom: ${space(4)};
      flex-direction: column;

      ${mqw[750]`
        flex-direction: row;
      `}

      a {
        + a {
          margin-top: ${space(2)};

          ${mqw[750]`
            margin-top: 0;
            margin-left: ${space(5)};
          `}
        }

        color: white;
      }
    }

    .linkedIn {
      margin-top: ${space(4)};

      img {
        width: 150px;
      }
    }
  }
`

export default {
  footer,
}
