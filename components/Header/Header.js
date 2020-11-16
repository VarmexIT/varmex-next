import Link from 'next/link'
import HamburgerButton from '../HamburgerButton/HamburgerButton'
import HeaderContactDetails from '../HeaderContactDetails/HeaderContactDetails'
import MobileNav from '../MobileNav/MobileNav'
import DesktopNav from '../DesktopNav/DesktopNav'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <HeaderContactDetails />
        <HamburgerButton />

        <div>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/img/varmex_logo_white.png" alt="Värmex logo" />
            </a>
          </Link>
        </div>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
