import { getContentByContentTypeId } from '../services/cms'
import Layout from '../components/Layout/Layout'
import EnvironmentalPolicy from '../components/EnvironmentalPolicy/EnvironmentalPolicy'

const EnvironmentalPolicyPage = ({ environmentalPolicy }) => {
  return (
    <Layout>
      <EnvironmentalPolicy environmentalPolicy={environmentalPolicy} />
    </Layout>
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
