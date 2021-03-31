import { useRef } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import SectionContext from '../contexts/SectionContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <Head>
        <title>Värmex.se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <SectionContext>
            <Component {...pageProps} />
          </SectionContext>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
