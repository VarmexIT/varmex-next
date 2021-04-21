import styled from 'styled-components'
import { space } from '../../styles/utils'
import Section from '../Section/Section'

const theCompanySection = styled(Section)`
  background: white;

  nav {
    background: #313131;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      overflow-x: scroll;

      li {
        padding: ${space(2)};

        &:first-child {
          padding-left: ${space(3)};
        }

        &:last-child {
          padding-right: ${space(3)};
        }
      }

      button {
        color: white;
        background: none;
        margin: 0;
        border: none;
        text-transform: uppercase;
        padding: ${space(1)} 0 ${space(0.5)} 0;
        width: min-content;
        white-space: nowrap;
        transition: color 0.3s;

        & + button {
          margin-left: ${space(2)};
        }

        &:hover {
          color: var(--clr-green);
        }

        &.active {
          color: var(--clr-green);
        }
      }
    }
  }
`

export default {
  theCompanySection,
}