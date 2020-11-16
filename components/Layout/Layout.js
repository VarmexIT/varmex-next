import MobileNavContext from '../../contexts/MobileNavContext'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <MobileNavContext>
        <Header />
      </MobileNavContext>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
