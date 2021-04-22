import { useRouter } from 'next/router'
import useHamburgerMenu from './useHamburgerMenu'
import scrollPageToElement from '../utils/scrollPageToElement'
import useMediaQueryWidth from './useMediaQueryWidth'

const useNavigation = () => {
  const is750 = useMediaQueryWidth(750)
  const { events, route } = useRouter()
  const { close } = useHamburgerMenu()

  const getHandler = (target, cb) => {
    let selector = `#${target}`

    return (nextRoute, { shallow }) => {
      if (nextRoute === '/') {
        selector = 'body'
      }

      if (shallow) {
        scrollPageToElement(selector, is750)
      }
      cb()
    }
  }

  const navigate = e => {
    close()
    if (route !== '/') {
      return
    }

    const target = e.currentTarget.pathname.split('/')[1]
    const handler = getHandler(target, () => {
      events.off('routeChangeComplete', handler)
    })

    events.on('routeChangeComplete', handler)
  }

  return {
    navigate,
  }
}

export default useNavigation
