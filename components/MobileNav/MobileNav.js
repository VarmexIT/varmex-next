/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import useNavigation from '../../hooks/useNavigation'
import useHamburgerMenu from '../../hooks/useHamburgerMenu'
import styles from './MobileNav.module.scss'

const liVariants = {
  show: {
    opacity: 1,
    x: 0,
  },
  hide: {
    opacity: 0,
    x: -40,
  },
}

const LinkItem = ({ children, slug }) => {
  const { navigate } = useNavigation()
  const { route, asPath } = useRouter()
  const isActive = asPath.split('/')[1] === slug

  return (
    <motion.li variants={liVariants}>
      <Link href="/" as={`/${slug}`} shallow={route === '/'}>
        <a
          onClick={navigate}
          className={cn({
            [styles.active]: isActive,
          })}
        >
          {children}
        </a>
      </Link>
    </motion.li>
  )
}

const navVariants = {
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hide: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
      delay: 0.2,
    },
  },
}

const MobileNav = () => {
  const { isOpen } = useHamburgerMenu()

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.nav
          variants={navVariants}
          initial="hide"
          animate="show"
          exit="hide"
          className={styles.mobileNav}
        >
          <ul>
            <LinkItem slug="foretaget">Företaget</LinkItem>
            <LinkItem slug="nyheter">Nyheter</LinkItem>
            <LinkItem slug="referenser">Referenser</LinkItem>
            <LinkItem slug="vara-losningar">Våra lösningar</LinkItem>
            <LinkItem slug="material">Material</LinkItem>
            <LinkItem slug="jobba-med-oss">Jobba med oss</LinkItem>
            <LinkItem slug="kontakt">Kontakt</LinkItem>
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileNav
