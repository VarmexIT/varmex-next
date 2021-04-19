import styled from 'styled-components'
import { mqw } from '../../styles/utils'
import Section from '../Section/Section'

const solutionsSection = styled(Section)`
  background: white url('/img/pattern_light.svg') left top repeat;
  background-size: cover;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    ${mqw[900]`
      flex-direction: row;
    `}
  }
`

export default {
  solutionsSection,
}
