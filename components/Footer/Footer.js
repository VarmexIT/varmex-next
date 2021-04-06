/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import { useState, useEffect, memo } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useMediaQueryWidth from '../../utils/hooks/useMediaQueryWidth'
import { MENU_ITEMS } from '../../utils/constants'
import useCMSContent from '../../utils/hooks/useCMSContent'
import chunkArray from '../../utils/chunkArray'
import { useSection } from '../../contexts/SectionContext'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

const getChuckedRows = (inputArray, divider) =>
  chunkArray(inputArray, divider).map((row, i) => ({ id: i, row }))

const extraItem = {
  slug: '/miljopolicy',
  linkText: 'Miljöpolicy',
  contentfulContentTypeId: 'miljopolicy',
}

const ALL_FOOTER_ITEMS = [...MENU_ITEMS, extraItem].map((item, i) => ({ id: i, ...item }))

const Footer = () => {
  const { dontRender, data } = useCMSContent('siteSettings')
  const siteSettings = data?.items?.[0]?.fields
  const isWide = useMediaQueryWidth(750)
  const [rows, setRows] = useState(getChuckedRows(ALL_FOOTER_ITEMS, 2))

  useEffect(() => {
    if (isWide) {
      setRows(getChuckedRows(ALL_FOOTER_ITEMS, 2))
    } else {
      setRows(getChuckedRows(ALL_FOOTER_ITEMS, 4))
    }
  }, [isWide])

  const { scrollToSection } = useSection()

  if (dontRender) {
    return null
  }

  return (
    <footer className={styles.footer}>
      <Container className={styles.navAndOffices} noGutter>
        <nav>
          {rows.map(({ id, row }) => (
            <ul key={id}>
              {row.map(item => (
                <li key={item.contentfulContentTypeId}>
                  {item.contentfulContentTypeId === 'miljopolicy' ? (
                    <Link href={item.slug}>
                      <a>{item.linkText}</a>
                    </Link>
                  ) : (
                    <Link href="/" as={item.slug} scroll={false}>
                      <a onClick={() => scrollToSection(item.slug)}>{item.linkText}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className={styles.offices}>
          <div className={styles.office}>
            <a href={siteSettings.office1Url} target="_blank" rel="noopener noreferrer">
              <img
                src={siteSettings.office1Image.fields.file.url}
                alt={siteSettings.office1Image.fields.title}
              />
            </a>
            <div className={styles.address}>{documentToReactComponents(siteSettings.office1)}</div>
          </div>
          <div className={styles.office}>
            <a href={siteSettings.office2Url} target="_blank" rel="noopener noreferrer">
              <img
                src={siteSettings.office2Image.fields.file.url}
                alt={siteSettings.office2Image.fields.title}
              />
            </a>
            <div className={styles.address}>{documentToReactComponents(siteSettings.office2)}</div>
          </div>
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
    </footer>
  )
}

export default memo(Footer)
