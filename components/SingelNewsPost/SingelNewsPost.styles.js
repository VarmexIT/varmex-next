import styled from 'styled-components'
import Container from '../Container/Container'
import { mqw, space, fonts } from '../../styles/utils'

const singelNewsPost = styled(Container)`
  background: white;

  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-bottom: 1px solid var(--clr-silver);
  }
`

const content = styled.div`
  padding: ${space(2)};

  ${mqw[900]`
    padding: ${space(16)};
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

  .meta {
    ${fonts.fontBarlowMedium()}
    border-top: 5px solid var(--clr-green);
    margin-top: ${space(2)};
    padding-top: ${space(2)};
    font-size: 2rem;
  }
`

export default {
  singelNewsPost,
  content,
}
