import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import CountUp from 'react-countup'
import useCMSContent from '../../hooks/useCMSContent'
import styles from './Boilerplate.styles'

const Boilerplate = () => {
  const { dontRender, data } = useCMSContent('boilerplate')
  const boilerplate = data?.items?.[0]?.fields

  if (dontRender) {
    return null
  }

  return (
    <styles.boilerplate>
      <div className="boilerplateInner">
        <h2>{boilerplate.heading}</h2>
        {documentToReactComponents(boilerplate.body)}
        <ul>
          <li style={{ gridArea: 'g1' }}>
            <span className="number">
              <CountUp end={boilerplate.section1Number} />
            </span>
            <span className="text">{boilerplate.section1Text}</span>
          </li>
          <li style={{ gridArea: 'g2' }}>
            <span className="number">
              <CountUp end={boilerplate.section2Number} />
            </span>
            <span className="text">{boilerplate.section2Text}</span>
          </li>
          <li style={{ gridArea: 'g3' }}>
            <span className="number">
              <CountUp end={boilerplate.section3Number} />
            </span>
            <span className="text">{boilerplate.section3Text}</span>
          </li>
          <li style={{ gridArea: 'g4' }}>
            <span className="number">
              <CountUp end={boilerplate.section4Number} />
            </span>
            <span className="text">{boilerplate.section4Text}</span>
          </li>
        </ul>
      </div>
    </styles.boilerplate>
  )
}

export default Boilerplate
