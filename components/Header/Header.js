import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '../Container/Container'
import MainNav from '../MainNav/MainNav'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.contactDetails}>
            <a href="tel:0840012500">
              <FaPhone className={styles.icon} />
              08 - 400 125 00
            </a>
            <a href="mailto:info@varmex.se">
              <MdEmail className={styles.icon} />
              info@varmex.se
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="HeaderContactInfo_linkedIn__1ik7q"
              href="https://www.linkedin.com/company/värmex-ab"
            >
              <img className={styles.icon} src="/img/linked_in.png" alt="LinkedIn" />
            </a>
          </div>
          <div>
            <img className={styles.logo} src="/img/varmex_logo_white.png" alt="Värmex logo" />
          </div>
          <div>
            <MainNav />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
