import { memo } from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getContentByContentTypeId } from '../services/cms'
import { EnterAnimation, ExitAnimation } from '../components/PageTransition/PageTransition'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Container from '../components/Container/Container'
import TheCompanySection from '../components/TheCompanySection/TheCompanySection'
import NewsSection from '../components/NewsSection/NewsSection'
import ReferencesSection from '../components/ReferencesSection/ReferencesSection'
import SolutionsSection from '../components/SolutionsSection/SolutionsSection'
import MaterialSection from '../components/MaterialSection/MaterialSection'
import WorkWithUsSection from '../components/WorkWithUsSection/WorkWithUsSection'
import ContactSection from '../components/ContactSection/ContactSection'

const HomePage = () => {
  return (
    <>
      <EnterAnimation />
      <ExitAnimation />
      <Layout>
        <Container noGutter className="mainContainer">
          <Hero />
          <TheCompanySection />
          <NewsSection />
          <ReferencesSection />
          <SolutionsSection />
          <MaterialSection />
          <WorkWithUsSection />
          <ContactSection />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  const queries = [
    'siteSettings',
    'boilerplate',
    'hero',
    'theCompany',
    'news',
    'newsItem',
    'references',
    'solutions',
    'material',
    'workWithUs',
    'contact',
    'varmehandbok',
  ]

  const promises = queries.map(query =>
    queryClient.prefetchQuery(query, () => getContentByContentTypeId(query))
  )
  await Promise.all(promises)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default memo(HomePage)
