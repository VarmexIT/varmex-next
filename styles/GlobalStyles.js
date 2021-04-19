// import { space } from '../styles/utils'
import { createGlobalStyle } from 'styled-components'
import { mqw, space, fonts } from './utils'

const GlobalStyles = createGlobalStyle`
:root {
  --header-height: 72px;

  ${mqw[750]`
    --header-height: 150px;
  `}

  --clr-cod-gray: #1d1d1d;
  --clr-green: #b3d078;
  --clr-silver: rgb(200, 200, 200, 0.25);
  --clr-nobel: #b7b7b7;
  --clr-error-red-background: #c33434;
  --clr-error-red-text: #fb4949;

}

* {
  box-sizing: border-box;
  // TODO: Fix outline for keyboard focused elements but not on mouse klick
  outline: none;
}

html,
body {
  padding: 0;
  margin: 0;
  color: var(--clr-cod-gray);
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background-color: #363636;
  ${fonts.fontGeorgiaRegular()}
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

h1,
h2,
h3 {
  margin: 0;
}

p {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  line-height: 1.6;

  & + p {
    margin-top: ${space(3)};
  }
}

button {
  cursor: pointer;
}

.mainContainer {
  box-shadow: 0 0 ${space(6)} ${space(4)} rgba(0, 0, 0, 0.1);
}

hr {
  border: 0;
  border-top: ${space(3)} solid var(--clr-green);
  margin: 0;
}

`

export default GlobalStyles
