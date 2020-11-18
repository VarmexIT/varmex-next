import { AnimatePresence, motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useMobileNav } from '../../contexts/MobileNavContext'
import styles from './HamburgerButton.module.scss'

const HamburgerButton = () => {
  const { isOpen, open, close } = useMobileNav()
  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.button
          key="1"
          initial={{
            rotate: '-30deg',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: '0deg',
          }}
          exit={{
            opacity: 0,
            scale: 0,
            rotate: '30deg',
          }}
          className={styles.hamburgerButton}
          onClick={close}
        >
          <GrClose />
        </motion.button>
      ) : (
        <motion.button
          key="2"
          initial={{
            rotate: '30deg',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: '0deg',
          }}
          exit={{
            opacity: 0,
            scale: 0,
            rotate: '-30deg',
          }}
          className={styles.hamburgerButton}
          onClick={open}
        >
          <GiHamburgerMenu />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default HamburgerButton
