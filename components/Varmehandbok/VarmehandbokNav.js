import styles from './Varmehandbok.styles'

const VarmehandbokNav = () => {
  return (
    <styles.nav>
      <div className="inner">
        <span className="title">Handboken</span>
        <div className="content">
          <ul>
            <li>Varför uppdatering och injustering</li>
            <li>Teknisk guide</li>
            <li>
              Så fungerar ett värmesystem
              <ul>
                <li>Radiatorer, konvektorer och golvvärme</li>
                <li>Möblering</li>
                <li>Termostater och handratter</li>
                <li>Inomhusklimat</li>
                <li>Radiatorventiler</li>
                <li>Stamventiler</li>
                <li>Olika kopplingsprinciper</li>
                <li>Vattenkvalitet</li>
                <li>Värmecentralen</li>
                <li>Reglering och övervakning</li>
              </ul>
            </li>
            <li>Projektets gång</li>
          </ul>
        </div>
      </div>
    </styles.nav>
  )
}

export default VarmehandbokNav
