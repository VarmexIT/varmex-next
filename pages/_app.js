import { useRef } from 'react'
import Head from 'next/head'
// import { createGlobalStyle } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import GlobalStyles from '../styles/GlobalStyles'
// import '../styles/globals.scss'

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: red !important;
//   }
// `

function MyApp({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
