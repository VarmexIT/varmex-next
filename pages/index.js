import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import smoothscroll from 'smoothscroll-polyfill'
import { getContentByContentTypeId } from '../services/cms'
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

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const HomePage = () => {
  return (
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
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  const queries = [
    'siteSettings',
    'hero',
    'theCompany',
    'news',
    'newsItem',
    'references',
    'solutions',
    'material',
    'workWithUs',
    'contact',
  ]

  const promises = queries.map(query =>
    queryClient.prefetchQuery(query, () => getContentByContentTypeId(query))
  )
  await Promise.all(promises)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 5, // 5 minutes
  }
}

export default HomePage
