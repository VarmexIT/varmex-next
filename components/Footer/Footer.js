/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import { memo } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MENU_ITEMS } from '../../utils/constants'
import useCMSContent from '../../utils/hooks/useCMSContent'
import { useSection } from '../../contexts/SectionContext'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

const partition = n => [Math.ceil(n / 2), Math.floor(n / 2)]
const [rowOneIndexEnd, rowTwoIndexStart] = partition(MENU_ITEMS.length)

const ROWS = [
  { id: 0, items: MENU_ITEMS.slice(0, rowOneIndexEnd) },
  { id: 1, items: MENU_ITEMS.slice(rowTwoIndexStart + 1) },
]

const Footer = () => {
  const { dontRender, data } = useCMSContent('siteSettings')
  const siteSettings = data?.items?.[0]?.fields

  const { scrollToSection } = useSection()

  if (dontRender) {
    return null
  }

  return (
    <header className={styles.footer}>
      <Container className={styles.navAndOffices}>
        <nav>
          {ROWS.map(({ id, items }) => (
            <ul key={id}>
              {items.map(({ slug, linkText, contentfulContentTypeId }) => (
                <li key={contentfulContentTypeId}>
                  <Link href="/" as={slug} scroll={false}>
                    <a onClick={() => scrollToSection(slug)}>{linkText}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className={styles.offices}>
          <div>{documentToReactComponents(siteSettings.office1)}</div>
          <div>{documentToReactComponents(siteSettings.office2)}</div>
        </div>
      </Container>

      <Container noGutter className={styles.companyInfo}>
        <h2>{siteSettings.companyName}</h2>
        <div className={styles.phoneAndEmail}>
          <a href="tel:0840012500">{siteSettings.phoneNumber}</a>
          <a href={`mailto:${siteSettings.emailAddress}`}>{siteSettings.emailAddress}</a>
        </div>

        <a
          className={styles.linkedIn}
          href={siteSettings.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/linked_in_white.png" alt="LinkedIn" />
        </a>
      </Container>
    </header>
  )
}

export default memo(Footer)
