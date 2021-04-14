/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import Scrollspy from 'react-scrollspy'
import useMediaQueryWidth from '../../hooks/useMediaQueryWidth'
import useNavigation from '../../hooks/useNavigation'
import { MENU_ITEMS } from '../../utils/constants'
import styles from './DesktopNav.module.scss'

const LinkItem = ({ children, slug, className }) => {
  const { navigate } = useNavigation()
  const { route, asPath } = useRouter()
  const isActive = asPath.split('/')[1] === slug

  return (
    <li>
      <Link href="/" as={`/${slug}`} shallow={route === '/'}>
        <a
          onClick={navigate}
          className={cn({
            [className]: !!className,
            [styles.active]: isActive,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const sections = ['hero', ...MENU_ITEMS.map(item => item.slug)]

const DesktopNav = () => {
  const is750 = useMediaQueryWidth(750)
  const { replace, route } = useRouter()
  const Wrapper = route === '/' ? Scrollspy : 'ul'
  const wrapperProps = {
    ...(route === '/'
      ? {
          items: sections,
          onUpdate: node => {
            if (node) {
              if (node.id === 'hero') {
                replace(`/`, undefined, { shallow: true })
              } else {
                replace(`/${node.id}`, undefined, { shallow: true })
              }
            }
          },
          offset: !is750 ? -48 : -55,
        }
      : {}),
  }

  return (
    <nav className={styles.desktopNav}>
      <Wrapper {...wrapperProps}>
        {MENU_ITEMS.map(({ slug, linkText }) => (
          <LinkItem key={slug} slug={slug}>
            {linkText}
          </LinkItem>
        ))}
      </Wrapper>
    </nav>
  )
}

export default DesktopNav
