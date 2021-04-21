import { useRouter } from 'next/router'

const useDoAfterRouteChange = () => {
  const { events } = useRouter()

  return userFunction => {
    const fnToRun = () => {
      userFunction()
      events.off('routeChangeComplete', fnToRun)
    }

    events.on('routeChangeComplete', fnToRun)
  }
}

export default useDoAfterRouteChange
