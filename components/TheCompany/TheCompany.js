import React from 'react'
import styles from './TheCompany.module.scss'

const TheCompany = () => {
  return (
    <div className={styles.theCompany}>
      <aside>
        <h2>Vårt Företag</h2>
        <nav>
          <ul>
            <li>
              <button>Företaget</button>
              <button>Innovationer</button>
              <button>Skrivbord och verklighet</button>
              <button>Framtiden</button>
              <button>Lösningar som håller</button>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
        <h3>Värmex</h3>
      </div>
    </div>
  )
}

export default TheCompany
