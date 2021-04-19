import HamburgerMenuProvider from '../../providers/HamburgerMenuProvider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.styles'

const Layout = ({ children }) => {
  return (
    <HamburgerMenuProvider>
      <Header />
      <styles.main>{children}</styles.main>
      <Footer />
    </HamburgerMenuProvider>
  )
}

export default Layout
