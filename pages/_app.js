import { useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import SectionContext from '../contexts/SectionContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef()
   if (!queryClientRef.current) {
     queryClientRef.current = new QueryClient()
   }

  const { route } = useRouter()

  return (
    <>
      <Head>
        <title>Värmex.se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <SectionContext>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={route} />
            </AnimatePresence>
          </SectionContext>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
