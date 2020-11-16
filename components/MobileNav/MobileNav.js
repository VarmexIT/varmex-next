import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'clsx'
import { useMobileNav } from '../../contexts/MobileNavContext'
import styles from './MobileNav.module.scss'

const LinkItem = ({ children, href }) => {
  const { route } = useRouter()

  return (
    <li>
      <Link href={href}>
        <a
          className={cn({
            [styles.active]: route === href,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  )
}

const DesktopNav = () => {
  const { isOpen } = useMobileNav()
  return isOpen ? (
    <nav className={styles.mobileNav}>
      <ul>
        <LinkItem href="/">Företaget</LinkItem>
        <LinkItem href="/nyheter">Nyheter</LinkItem>
        <LinkItem href="/referenser">Referenser</LinkItem>
        <LinkItem href="/vara-losningar">Våra lösningar</LinkItem>
        <LinkItem href="/material">Material</LinkItem>
        <LinkItem href="/jobba-med-oss">Jobba med oss</LinkItem>
        <LinkItem href="/kontakt">Kontakt</LinkItem>
      </ul>
    </nav>
  ) : null
}

export default DesktopNav
