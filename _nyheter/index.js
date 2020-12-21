import { QueryCache } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getContentByContentTypeId } from '../../services/cms'
import useCMSContent from '../../utils/hooks/useCMSContent'
import NewsPost from '../../components/NewsPost/NewsPost'
import Layout from '../../components/Layout/Layout'

const NewsPage = () => {
  const { data } = useCMSContent('newsPost')

  return (
    <Layout>
      {data.items.map(({ sys: { id }, fields: post }) => (
        <NewsPost key={id} post={post} />
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const queryCache = new QueryCache()
  const queries = ['newsPost']

  const promises = queries.map(query =>
    queryCache.prefetchQuery(query, () => getContentByContentTypeId(query))
  )
  await Promise.all(promises)

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  }
}

export default NewsPage
