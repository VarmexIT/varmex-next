import { useEffect, useRef } from 'react'

const useInterval = (callback, delay, ...args) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current(...args)
      }
    }
    if (delay !== null && delay !== undefined) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay, args])
}

export default useInterval
