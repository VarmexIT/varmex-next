import HamburgerMenuProvider from '../../providers/HamburgerMenuProvider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <HamburgerMenuProvider>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </HamburgerMenuProvider>
  )
}

export default Layout
