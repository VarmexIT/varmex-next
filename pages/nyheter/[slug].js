import { getContentByContentTypeId, getNewsItemBySlug } from '../../services/cms'
import NewsPost from '../../components/NewsPost/NewsPost'
import Layout from '../../components/Layout/Layout'

const NewsItemPage = ({ post }) => {
  return (
    <Layout>
      <NewsPost fullPost post={post} />
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
