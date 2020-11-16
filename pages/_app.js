import Head from 'next/head'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { Hydrate } from 'react-query/hydration'
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
          <Component {...pageProps} />
        </Hydrate>
      </ReactQueryCacheProvider>
    </>
  )
}

export default MyApp
