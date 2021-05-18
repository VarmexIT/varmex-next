import styled from 'styled-components'
import { mqw, space, fonts } from '../../styles/utils'
import Section from '../Section/Section'

const workWithUsSection = styled(Section)`
  background: white;

  .inner {
    h3 {
      ${fonts.fontBarlowMedium()}
      font-size: 3rem;
      margin: 0 0 ${space(2)} 0;
    }
  }
`

const content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-height: 340px;
    width: 100%;
    object-fit: cover;
    height: intrinsic;
  }

  ${mqw[750]`
    flex-direction: row-reverse;

    img,
    .body {
      width: 50%;
    }

    img {
      max-height: none;
    }
  `}

  .body {
    padding: ${space(4)};

    ${mqw[900]`
      padding: ${space(8)};
    `}

    img {
      width: 125px;
      float: right;
      margin-top: ${space(2)};

      ${mqw[750]`
        margin-top: ${space(8)};
      `}
    }
  }
`

const jobs = styled.div`
  margin: 0;
  border-top: 1px solid var(--clr-nobel);
  background: #fcfcfc;

  h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: left;
    margin-left: ${space(3)};

    ${mqw[750]`
      margin-right: ${space(9)};
    `}
  }

  ul {
    ${fonts.fontBarlowRegular()}
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background: white url('/img/pattern_light.svg') left top repeat;
    background-size: cover;
    margin: 0;
    list-style: none;
    font-size: 1.8rem;
    padding: 0;

    li {
      padding: ${space(4)};
      box-shadow: 0 0 1px var(--clr-nobel);
      background: rgba(255, 255, 255, 0.6);

      h4 {
        ${fonts.fontBarlowMedium()}
        margin: 0 0 ${space(2)} 0;
        font-size: 2.4rem;
      }

      p {
        ${fonts.fontGeorgiaRegular()}
        font-size: 1.6rem;
      }

      .readMoreLink {
        ${fonts.fontBarlowMedium()}
        float: right;
        text-transform: uppercase;
        color: var(--clr-cod-gray);
        display: flex;
        align-items: center;
        margin-top: ${space(3)};
        font-size: 2.4rem;
        transition: color 0.3s;

        svg {
          margin: 0 0 -2px ${space(1)};
          color: var(--clr-cod-gray);
          transition: transform 0.3s;
        }

        &:hover {
          color: var(--clr-green);

          svg {
            transform: translateX(${space(1)});
          }
        }
      }
    }
  }
`

export default {
  workWithUsSection,
  content,
  jobs,
}
