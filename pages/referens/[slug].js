import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContentByContentTypeId, getReferenceItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'

const ReferenceItemPage = ({ post }) => {
  return (
    <Layout>
      <div style={{ background: 'white', padding: '16px' }}>
        <img src={post.image.fields.file.url} alt={post.image.fields.heading} />
        <h1>{post.heading}</h1>
        {documentToReactComponents(post.body)}
      </div>
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
