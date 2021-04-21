import { motion } from 'framer-motion'
import styled from 'styled-components'

const container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;

  > div {
    background: var(--clr-green);
    flex: 1;

    &.right {
      transform-origin: right;
    }

    &.bottom {
      transform-origin: bottom;
    }
  }
`

export default {
  container,
}
