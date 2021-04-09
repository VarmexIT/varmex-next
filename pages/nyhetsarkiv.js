import { getContentByContentTypeId } from '../services/cms'
import Layout from '../components/Layout/Layout'
import NewsArchive from '../components/NewsArchive/NewsArchive'

const NewsArchivePage = ({ newsItems }) => {
  return (
    <Layout>
      <NewsArchive newsItems={newsItems} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { items: newsItems } = await getContentByContentTypeId('newsItem')

  return {
    props: {
      newsItems,
    },
  }
}

export default NewsArchivePage
