import CountUp from 'react-countup'
import styles from './Boilerplate.styles'

const Boilerplate = () => {
  return (
    <styles.boilerplate>
      <div className="boilerplateInner">
        <h2>Värmex är specialister inom klimattekniska installationer.</h2>
        <p>
          Med en unik kombination av tekniker och ingenjörer och mer än 35 års erfarenhet av
          komplexa uppdrag på området inomhusklimat omsätter vi Parisavtalet i verkligheten utan att
          ge avkall på komfort.
        </p>

        <ul>
          <li style={{ gridArea: 'g1' }}>
            <span className="number">
              <CountUp end={35} />
            </span>
            <span className="text">års erfarenhet</span>
          </li>
          <li style={{ gridArea: 'g2' }}>
            <span className="number">
              <CountUp end={40} />
            </span>
            <span className="text">tekniker & ingenjörer</span>
          </li>
          <li style={{ gridArea: 'g3' }}>
            <span className="number">
              <CountUp end={44} />
            </span>
            <span className="text">miljoner omsättning 2020</span>
          </li>
          <li style={{ gridArea: 'g4' }}>
            <span className="number">
              <CountUp end={2} />
            </span>
            <span className="text">kontor, Tyresö och Marievik</span>
          </li>
        </ul>
      </div>
    </styles.boilerplate>
  )
}

export default Boilerplate
