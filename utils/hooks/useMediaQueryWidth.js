import { useState, useEffect } from 'react'

function useMediaQueryWidth(width) {
  const mediaQueryString = `(min-width: ${width / 16}em)`
  const [queryMatch, setQueryMatch] = useState(null)

  useEffect(() => {
    const setMediaMatchHandler = e => setQueryMatch(e.matches)

    const mediaQueryList = window.matchMedia(mediaQueryString)

    setMediaMatchHandler(mediaQueryList)

    mediaQueryList.addListener(setMediaMatchHandler)

    return () => mediaQueryList.removeListener(setMediaMatchHandler)
  }, [mediaQueryString])

  return queryMatch
}

export default useMediaQueryWidth
