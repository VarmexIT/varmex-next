/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import useMediaQueryWidth from '../../hooks/useMediaQueryWidth'
import useNavigation from '../../hooks/useNavigation'
import HamburgerButton from '../HamburgerButton/HamburgerButton'
import HeaderContactDetails from '../HeaderContactDetails/HeaderContactDetails'
import MobileNav from '../MobileNav/MobileNav'
import DesktopNav from '../DesktopNav/DesktopNav'
import Container from '../Container/Container'
import styles from './Header.module.scss'

const Header = () => {
  const { route } = useRouter()
  const { navigate } = useNavigation()
  const { scrollY } = useViewportScroll()
  const is1100 = useMediaQueryWidth(1100)
  const is750 = useMediaQueryWidth(750)
  const yPos = useTransform(scrollY, [0, 100], [0, -72])

  const logoScaleMap = is1100 ? [1, 0.8] : [1, 1]
  const logoScale = useTransform(scrollY, [0, 100], logoScaleMap)

  const logoYMap = is1100 ? [1, 13] : [0, 0]
  const logoY = useTransform(scrollY, [0, 100], logoYMap)

  const logoOpacityMap = is1100 ? [1, 1] : [1, 0]
  const logoOpacity = useTransform(scrollY, [0, 100], logoOpacityMap)

  return (
    <motion.header
      className={styles.header}
      style={{
        y: is750 ? yPos : 0,
      }}
    >
      <Container noGutter>
        <div className={styles.inner}>
          <Link href="/" scroll={false} shallow={route === '/'}>
            <motion.a
              className={styles.logoLink}
              onClick={navigate}
              style={{
                scale: is750 ? logoScale : 1,
                y: is750 ? logoY : 0,
                opacity: is750 ? logoOpacity : 1,
              }}
            >
              <img className={styles.logo} src="/img/varmex_logo_white.png" alt="Värmex logo" />
            </motion.a>
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
