import { EnterAnimation, ExitAnimation } from '../components/PageTransition/PageTransition'
import Layout from '../components/Layout/Layout'
import Varmehandbok from '../components/Varmehandbok/Varmehandbok'

const VarmehandbokPage = () => {
  return (
    <>
      <EnterAnimation />
      <ExitAnimation />
      <Layout>
        <Varmehandbok />
      </Layout>
    </>
  )
}

export default VarmehandbokPage
