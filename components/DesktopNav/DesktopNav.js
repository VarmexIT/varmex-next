/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'
import Link from 'next/link'
import cn from 'clsx'
import { useSection } from '../../contexts/SectionContext'
import { MENU_ITEMS } from '../../utils/constants'
import styles from './DesktopNav.module.scss'

const LinkItem = ({ children, slug, className }) => {
  const { scrollToSection } = useSection()
  const { pathname } = useRouter()

  return (
    <li>
      <Link href="/" as={slug} scroll={false}>
        <a
          onClick={() => {
            if (pathname === '/') {
              scrollToSection(slug)
            }
          }}
          className={cn({
            [className]: !!className,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const DesktopNav = () => {
  const { pathname } = useRouter()
  const { sections, setSectionUrl } = useSection()
  const items = [...sections.keys()]
  return (
    <nav className={styles.desktopNav}>
      <Scrollspy
        items={items}
        currentClassName={styles.active}
        onUpdate={node => {
          if (pathname === '/') {
            setSectionUrl(node?.id)
          }
        }}
        offset={-70}
      >
        {MENU_ITEMS.map(({ slug, linkText }) => (
          <LinkItem key={slug} slug={slug}>
            {linkText}
          </LinkItem>
        ))}
      </Scrollspy>
    </nav>
  )
}

export default DesktopNav
