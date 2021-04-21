import { getContentByContentTypeId } from '../services/cms'
import { EnterAnimation, ExitAnimation } from '../components/PageTransition/PageTransition'
import Layout from '../components/Layout/Layout'
import EnvironmentalPolicy from '../components/EnvironmentalPolicy/EnvironmentalPolicy'

const EnvironmentalPolicyPage = ({ environmentalPolicy }) => {
  return (
    <>
      <EnterAnimation />
      <ExitAnimation />
      <Layout>
        <EnvironmentalPolicy environmentalPolicy={environmentalPolicy} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const {
    items: [{ fields: environmentalPolicy }],
  } = await getContentByContentTypeId('environmentalPolicy')

  return {
    props: {
      environmentalPolicy,
    },
  }
}

export default EnvironmentalPolicyPage
