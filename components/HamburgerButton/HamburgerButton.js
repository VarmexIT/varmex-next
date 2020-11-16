import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useMobileNav } from '../../contexts/MobileNavContext'
import styles from './HamburgerButton.module.scss'

const HamburgerButton = () => {
  const { isOpen, open, close } = useMobileNav()
  return isOpen ? (
    <button type="button" onClick={close} className={styles.hamburgerButton}>
      <GrClose />
    </button>
  ) : (
    <button type="button" onClick={open} className={styles.hamburgerButton}>
      <GiHamburgerMenu />
    </button>
  )
}

export default HamburgerButton
