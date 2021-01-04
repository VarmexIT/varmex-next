import { QueryCache } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getContentByContentTypeId } from '../services/cms'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Container from '../components/Container/Container'
import TheCompanySection from '../components/TheCompanySection/TheCompanySection'
import NewsSection from '../components/NewsSection/NewsSection'
import ReferencesSection from '../components/ReferencesSection/ReferencesSection'
import Solutions from '../components/Solutions/Solutions'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Container noGutter>
        <TheCompanySection />
        <NewsSection />
        <ReferencesSection />
        <Solutions />
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const queryCache = new QueryCache()
  const queries = ['heroItem', 'theCompany', 'news', 'newsItem', 'references', 'solutions']

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

export default HomePage
