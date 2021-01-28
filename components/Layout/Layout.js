import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MobileNavContext from '../../contexts/MobileNavContext'
import { useSection } from '../../contexts/SectionContext'
import { MENU_ITEMS } from '../../utils/constants'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const { pathname, asPath } = useRouter()
  const { scrollToSection } = useSection()

  useEffect(() => {
    if (pathname === '/' && MENU_ITEMS.map(({ slug }) => slug).includes(asPath)) {
      scrollToSection(asPath)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MobileNavContext>
        <Header />
      </MobileNavContext>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
