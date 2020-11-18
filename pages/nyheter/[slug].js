import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContentByContentTypeId, getNewsItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'

const NewsItemPage = ({ post }) => {
  return (
    <Layout>
      <div
        style={{
          paddingTop: '120px',
        }}
      >
        <h1>{post.title}</h1>
        {documentToReactComponents(post.body)}
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getNewsItemBySlug(params.slug)

  return {
    props: {
      post: post.fields,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await getContentByContentTypeId('newsPost')
  console.log('posts:', posts)
  const paths = posts.items.map(post => ({
    params: {
      slug: post.fields.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default NewsItemPage
