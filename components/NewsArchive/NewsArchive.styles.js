import styled from 'styled-components'
import Container from '../Container/Container'
import { space, fonts } from '../../styles/utils'

const newsArchive = styled(Container)`
  background: white;

  h1 {
    ${fonts.fontBarlowMedium()}
    font-size: 4rem;
    padding: ${space(6)} ${space(8)};
    text-transform: uppercase;
    border-bottom: 1px solid var(--clr-nobel);
  }
`

export default {
  newsArchive,
}
