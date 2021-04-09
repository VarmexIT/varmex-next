import { getContentByContentTypeId, getReferenceItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'
import SingelReferencePost from '../../components/SingelReferencePost/SingelReferencePost'

const ReferenceItemPage = ({ post, referenceItems }) => {
  return (
    <Layout>
      <SingelReferencePost post={post} referenceItems={referenceItems} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getReferenceItemBySlug(params.slug)
  const referenceItems = await getContentByContentTypeId('referenceItem')
  const otherReferences = referenceItems.items.filter(item => item.sys.id !== post.sys.id)

  return {
    props: {
      post: post.fields,
      referenceItems: otherReferences,
    },
    revalidate: 60 * 5, // 5 minutes
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
