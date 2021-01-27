/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
// import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'
import Link from 'next/link'
import cn from 'clsx'
import { useSection } from '../../contexts/SectionContext'
import styles from './DesktopNav.module.scss'

const LinkItem = ({ children, slug, className }) => {
  const { scrollToSection } = useSection()

  return (
    <li>
      <Link href="/" as={slug} scroll={false}>
        <a
          onClick={() => scrollToSection(slug)}
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
  const { sections, setSectionUrl } = useSection()
  const items = [...sections.keys()]
  return (
    <nav className={styles.desktopNav}>
      <Scrollspy
        items={items}
        currentClassName={styles.active}
        onUpdate={node => setSectionUrl(node.id)}
        offset={-70}
      >
        <LinkItem slug="/foretaget">Företaget</LinkItem>
        <LinkItem slug="/nyheter">Nyheter</LinkItem>
        <LinkItem slug="/referenser">Referenser</LinkItem>
        <LinkItem slug="/vara-losningar">Våra lösningar</LinkItem>
        <LinkItem slug="/material">Material</LinkItem>
        <LinkItem slug="/jobba-med-oss">Jobba med oss</LinkItem>
        <LinkItem slug="/kontakt">Kontakt</LinkItem>
      </Scrollspy>
    </nav>
  )
}

export default DesktopNav
