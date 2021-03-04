import { getContentByContentTypeId, getNewsItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'
import SingelNewsPost from '../../components/SingelNewsPost/SingelNewsPost'

const NewsItemPage = ({ post }) => {
  return (
    <Layout>
      <SingelNewsPost post={post} />
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
  const newsItems = await getContentByContentTypeId('newsItem')
  const paths = newsItems.items.map(post => ({
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
