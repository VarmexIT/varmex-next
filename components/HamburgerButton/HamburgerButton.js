import { AnimatePresence, motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import useHamburgerMenu from '../../hooks/useHamburgerMenu'
import styles from './HamburgerButton.styles'

const HamburgerButton = () => {
  const { isOpen, open, close } = useHamburgerMenu()

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <styles.hamburgerButton
          as={motion.button}
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
          onClick={close}
        >
          <GrClose />
        </styles.hamburgerButton>
      ) : (
        <styles.hamburgerButton
          as={motion.button}
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
          onClick={open}
        >
          <GiHamburgerMenu />
        </styles.hamburgerButton>
      )}
    </AnimatePresence>
  )
}

export default HamburgerButton
