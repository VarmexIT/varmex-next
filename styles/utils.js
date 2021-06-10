import { css } from 'styled-components'

export const maxContainerWidth = 1200

const sizes = {
  600: 600,
  750: 750,
  900: 900,
  1000: 1000,
  1100: 1100,
  2000: 2000,
  max: maxContainerWidth + 50,
}

export const fonts = {
  fontBarlowRegular: () => css`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 400;
  `,
  fontBarlowMedium: () => css`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 500;
  `,
  fontBarlowBold: () => css`
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
  `,
  fontGeorgiaRegular: () => css`
    font-family: Georgia, Times, 'Times New Roman', serif;
    font-weight: 400;
  `,
}

export const space = (nr = 1) => `${nr * 8}px`
export const mqw = Object.entries(sizes).reduce((acc, [key, val]) => {
  return {
    ...acc,
    [key]: (...args) => css`
      @media only screen and (min-width: ${val / 16}em) {
        ${css(...args)}
      }
    `,
  }
}, {})
