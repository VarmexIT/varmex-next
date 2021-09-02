import styled from 'styled-components'
import Container from '../Container/Container'
import { mqw, fonts, space } from '../../styles/utils'

const varmehandbok = styled(Container)`
  background: white;
  position: relative;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    object-position: top;
    border-bottom: 1px solid var(--clr-silver);
  }
`

const content = styled.div`
  padding: ${space(2)};
  padding-right: ${space(8)};
  overflow: hidden;

  ${mqw[900]`
    padding: ${space(8)};
  `}

  h1 {
    ${fonts.fontBarlowMedium()}
    font-size: 4rem;
    line-height: 1;
    margin-bottom: ${space(4)};
  }
`

export default {
  varmehandbok,
  content,
}
