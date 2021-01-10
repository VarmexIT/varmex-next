import Head from 'next/head'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import SectionContext from '../contexts/SectionContext'
import '../styles/globals.scss'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Värmex.se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Hydrate state={pageProps.dehydratedState}>
          <SectionContext>
            <Component {...pageProps} />
          </SectionContext>
        </Hydrate>
      </ReactQueryCacheProvider>
    </>
  )
}

export default MyApp
