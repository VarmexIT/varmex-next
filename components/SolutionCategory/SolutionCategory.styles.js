import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'

const solutionCategory = styled.div`
  flex: 1;
  background: white;
  padding: ${space(2)} 0 ${space(4)} 0;

  ${mqw[900]`
    box-shadow: 0 0 0 1px var(--clr-nobel);
  `}

  &:not(:first-of-type) {
    margin-top: ${space(2)};

    ${mqw[900]`
      margin-top: 0;
    `}
  }

  h3 {
    ${fonts.fontBarlowMedium()}
    text-transform: uppercase;
    text-align: right;
    font-size: 2.4rem;
    padding: ${space(2)};

    ${mqw[900]`
      text-align: center;
      font-size: 2rem;
    `}

    ${mqw[1100]`
      font-size: 2.4rem;
    `}
  }
`

export default {
  solutionCategory,
}
