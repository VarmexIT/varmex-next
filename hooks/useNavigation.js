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

    if (route === '/') {
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

    return nextRoute => {
      if (nextRoute === '/') {
        selector = 'body'
      }

      scrollPageToElement(selector, is750)
      cb()
    }
  }

  const navigate = e => {
    const target = e.currentTarget.pathname.split('/')[1]
    const handler = getHandler(target, () => {
      events.off('routeChangeComplete', handler)
    })

    close()

    events.on('routeChangeComplete', handler)
  }

  return {
    navigate: () => console.log('nav!'),
  }
}

export default useNavigation
