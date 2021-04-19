import { useEffect, memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import smoothscroll from 'smoothscroll-polyfill'
import { getContentByContentTypeId } from '../services/cms'
import scrollPageToElement from '../utils/scrollPageToElement'
import useMediaQueryWidth from '../hooks/useMediaQueryWidth'
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
  /*   const { asPath } = useRouter()
  const is750 = useMediaQueryWidth(750)

    useEffect(() => {
    if (asPath !== '/') {
      scrollPageToElement(`#${asPath.split('/')[1]}`, is750)
    }
  }, []) */

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
  }
}

export default memo(HomePage)
