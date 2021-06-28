import styled from 'styled-components'
import Container from '../Container/Container'
import { mqw, space, fonts } from '../../styles/utils'

const singleReferencePost = styled(Container)`
  background: white;

  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-bottom: 1px solid --var(--clr-silver);
  }
`

const content = styled.div`
  padding: ${space(2)};

  ${mqw[900]`
    padding: ${space(8)} 20%;
  `}

  h1,
  h2 {
    ${fonts.fontBarlowMedium()}
    font-size: 4rem;
    line-height: 1;
    margin-bottom: ${space(4)};
  }

  h2 {
    font-size: 3rem;
    margin: ${space(3)} 0 ${space(2)};
  }

  a {
    color: var(--clr-cod-gray);
    text-decoration: underline;
  }
`

export default {
  singleReferencePost,
  content,
}
