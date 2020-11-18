import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContentByContentTypeId, getNewsItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'

const NewsItemPage = ({ post }) => {
  // console.log('post:', post)
  // return <h1>Test</h1>
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
  // console.log('params:', params.slug)
  const post = await getNewsItemBySlug(params.slug)
  // console.log('post:', post)

  return {
    props: {
      post: post.fields,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = await getContentByContentTypeId('newsPost')
  const paths = posts.items.map(post => ({
    params: {
      slug: post.fields.slug,
    },
  }))

  // console.log('paths:', paths)

  return {
    paths,
    fallback: false,
  }
}

export default NewsItemPage
