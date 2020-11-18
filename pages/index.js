import { QueryCache } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getContentByContentTypeId } from '../services/cms'
import SectionNews from '../components/SectionNews/SectionNews'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import TheCompany from '../components/TheCompany/TheCompany'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <TheCompany />
      {/* <SectionNews /> */}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const queryCache = new QueryCache()
  const queries = ['sectionHero', 'theCompany']

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
