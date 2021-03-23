import Link from 'next/link'
import { motion } from 'framer-motion'
import { getContentByContentTypeId, getNewsItemBySlug } from '../../services/cms'
import Layout from '../../components/Layout/Layout'
import SingelNewsPost from '../../components/SingelNewsPost/SingelNewsPost'

const NewsItemPage = ({ post, newsItems }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Layout>
        <SingelNewsPost post={post} newsItems={newsItems} />
      </Layout>
    </motion.div>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getNewsItemBySlug(params.slug)
  const newsItems = await getContentByContentTypeId('newsItem')
  const moreNewsItems = newsItems.items.filter(item => item.sys.id !== post.sys.id).slice(0, 3)

  return {
    props: {
      post: post.fields,
      newsItems: moreNewsItems,
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
    fallback: true,
  }
}

// export default TestNews
export default NewsItemPage
