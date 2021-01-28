/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import { useState, useEffect } from 'react'
import cn from 'clsx'
import { motion, useViewportScroll } from 'framer-motion'
import useMeasure from 'react-use-measure'
import Link from 'next/link'
import { useSection } from '../../contexts/SectionContext'
import useMediaQueryWidth from '../../utils/hooks/useMediaQueryWidth'
import HamburgerButton from '../HamburgerButton/HamburgerButton'
import HeaderContactDetails from '../HeaderContactDetails/HeaderContactDetails'
import MobileNav from '../MobileNav/MobileNav'
import DesktopNav from '../DesktopNav/DesktopNav'
import Container from '../Container/Container'
import styles from './Header.module.scss'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const { scrollToSection, setSectionUrl } = useSection()
  const { scrollY } = useViewportScroll()
  const [ref, { height: headerHeight }] = useMeasure()
  const is750 = useMediaQueryWidth(750)
  const is1000 = useMediaQueryWidth(1000)

  useEffect(() => {
    return scrollY.onChange(y => {
      setIsSticky(y > headerHeight)
      if (y === 0) {
        setSectionUrl('/')
      }
    })
  }, [scrollY, headerHeight, setSectionUrl])

  return (
    <motion.header
      className={styles.header}
      ref={ref}
      animate={{
        y: is750 && isSticky ? -80 : 0,
      }}
      transition={{
        y: {
          duration: 0.2,
        },
      }}
    >
      <Container>
        <div className={styles.inner}>
          <Link href="/" scroll={false}>
            <a onClick={() => scrollToSection('/')}>
              <motion.img
                className={cn(styles.logo, { [styles.isSticky]: isSticky })}
                src="/img/varmex_logo_white.png"
                alt="Värmex logo"
                animate={{
                  y: is1000 && isSticky ? 18 : 0,
                  scale: is1000 && isSticky ? 0.7 : 1,
                }}
              />
            </a>
          </Link>

          <HeaderContactDetails />
          <HamburgerButton />

          <DesktopNav />
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  )
}

export default Header
