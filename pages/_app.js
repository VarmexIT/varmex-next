import { useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { AnimatePresence, motion } from 'framer-motion'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  const { route } = useRouter()
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Värmex.se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <AnimatePresence
            initial={false}
            exitBeforeEnter
            onExitComplete={() => {
              window.scrollTo({
                top: 0,
              })
            }}
          >
            <Component {...pageProps} key={route} />
          </AnimatePresence>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
