import { useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import smoothscroll from 'smoothscroll-polyfill'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { AnimatePresence } from 'framer-motion'
import GlobalStyles from '../styles/GlobalStyles'
import scrollPageToElement from '../utils/scrollPageToElement'
import useMediaQueryWidth from '../hooks/useMediaQueryWidth'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

function MyApp({ Component, pageProps }) {
  const { route, asPath } = useRouter()
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const is750 = useMediaQueryWidth(750)

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
              if (route === '/' && asPath !== '/') {
                const selector = `#${asPath.split('/')[1]}`
                scrollPageToElement(selector, is750, { smooth: false })
              } else {
                window.scrollTo({
                  top: 0,
                })
              }
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
