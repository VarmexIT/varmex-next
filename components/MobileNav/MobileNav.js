import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useMobileNav } from '../../contexts/MobileNavContext'
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

const LinkItem = ({ children, href }) => {
  const { route } = useRouter()

  return (
    <motion.li variants={liVariants}>
      <Link href={href}>
        <a
          className={cn({
            [styles.active]: route === href,
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
  const { isOpen } = useMobileNav()
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
            <LinkItem href="/">Företaget</LinkItem>
            <LinkItem href="/nyheter">Nyheter</LinkItem>
            <LinkItem href="/referenser">Referenser</LinkItem>
            <LinkItem href="/vara-losningar">Våra lösningar</LinkItem>
            <LinkItem href="/material">Material</LinkItem>
            <LinkItem href="/jobba-med-oss">Jobba med oss</LinkItem>
            <LinkItem href="/kontakt">Kontakt</LinkItem>
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileNav
