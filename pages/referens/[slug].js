import { getContentByContentTypeId, getReferenceItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'
import SingelReferencePost from '../../components/SingelReferencePost/SingelReferencePost'

const ReferenceItemPage = ({ post }) => {
  return (
    <Layout>
      <SingelReferencePost post={post} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getReferenceItemBySlug(params.slug)

  return {
    props: {
      post: post.fields,
    },
  }
}

export const getStaticPaths = async () => {
  const referenceItems = await getContentByContentTypeId('referenceItem')
  const paths = referenceItems.items.map(post => ({
    params: {
      slug: post.fields.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ReferenceItemPage
