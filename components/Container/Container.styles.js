import styled from 'styled-components'
import { mqw, maxContainerWidth } from '../../styles/utils'

const container = styled.div`
  max-width: ${maxContainerWidth}px;
  height: 100%;
  margin: 0 auto;
  padding-right: 2.5%;
  padding-left: 2.5%;

  &.noGutter {
    padding-right: 0;
    padding-left: 0;
  }

  ${mqw.max`
    padding-left: 0;
    padding-right: 0;
  `}
`

export default {
  container,
}
