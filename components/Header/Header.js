import Link from 'next/link'
import HamburgerButton from '../HamburgerButton/HamburgerButton'
import HeaderContactDetails from '../HeaderContactDetails/HeaderContactDetails'
import MobileNav from '../MobileNav/MobileNav'
import DesktopNav from '../DesktopNav/DesktopNav'
import Container from '../Container/Container'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/img/varmex_logo_white.png" alt="Värmex logo" />
            </a>
          </Link>

          <HeaderContactDetails />
          <HamburgerButton />

          <DesktopNav />
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}

export default Header
