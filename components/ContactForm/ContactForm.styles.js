import styled from 'styled-components'
import { mqw, fonts, space } from '../../styles/utils'

const contactForm = styled.form`
  ${fonts.fontBarlowMedium()}
  position: relative;
  overflow: hidden;
  margin-top: ${space(2)};
  display: flex;
  flex-wrap: wrap;

  label {
    ${fonts.fontBarlowMedium()}
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

    ${mqw[750]`
      flex-basis: 49%;

      &:nth-child(1),
      &:nth-child(3) {
        margin-right: 2%;
      }
    `}

    .innerLabel {
      margin-bottom: ${space(1)};

      .error {
        margin-left: ${space(1)};
        color: var(--clr-error-red-text);
      }
    }

    input,
    textarea {
      background: #fafafa;
      padding: ${space(1)} ${space(2)};
      border: 1px solid var(--clr-nobel);
      font-size: 1.8rem;

      &.error {
        border-color: var(--clr-error-red-text);
      }
    }

    textarea {
      height: ${space(30)};
    }

    margin-top: ${space(1)};

    &.messageLabel {
      flex-basis: 100%;
    }
  }

  button {
    ${fonts.fontBarlowMedium()}
    background: var(--clr-green);
    color: white;
    width: 100%;
    border: none;
    padding: ${space(1)} 0;
    font-size: 2.3rem;
    margin-top: ${space(1)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s;

    &[disabled] {
      background: grey;
      cursor: not-allowed;
    }

    .spinner {
      margin-right: ${space(2)};
    }
  }
`

export default {
  contactForm,
}
