/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import styles from './DesktopNav.module.scss'
import { useSection } from '../../contexts/SectionContext'

const LinkItem = ({ children, slug }) => {
  const { asPath } = useRouter()
  const { setSection } = useSection()

  return (
    <li>
      <Link href="/" as={slug} scroll={false}>
        <a
          onClick={() => setSection(slug)}
          className={cn({
            [styles.active]: asPath === slug,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const DesktopNav = () => {
  return (
    <nav className={styles.desktopNav}>
      <ul>
        <LinkItem slug="/foretaget">Företaget</LinkItem>
        <LinkItem slug="/nyheter">Nyheter</LinkItem>
        <LinkItem slug="/referenser">Referenser</LinkItem>
        <LinkItem slug="/vara-losningar">Våra lösningar</LinkItem>
        <LinkItem slug="/material">Material</LinkItem>
        <LinkItem slug="/jobba-med-oss">Jobba med oss</LinkItem>
        <LinkItem slug="/kontakt">Kontakt</LinkItem>
      </ul>
    </nav>
  )
}

export default DesktopNav
