import { memo } from 'react'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import excerpts from 'excerpts'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import styles from './WorkWithUsSection.module.scss'

const WorkWithUsSection = () => {
  const { dontRender: workWithUsDontRender, data: workWithUsData } = useCMSContent('workWithUs')
  const { dontRender: dontRenderSiteSettings, data: dataSiteSettings } = useCMSContent(
    'siteSettings'
  )

  if (workWithUsDontRender || dontRenderSiteSettings) {
    return null
  }

  const { linkedInUrl } = dataSiteSettings?.items?.[0].fields
  const { heading, image, body, positionsHeading, positions } = workWithUsData?.items?.[0].fields

  return (
    <Section
      outerClassName={styles.workWithUsSection}
      innerClassName={styles.inner}
      heading={heading}
      slug="/jobba-med-oss"
    >
      <div className={styles.content}>
        <img src={image.fields.file.url} alt={image.fields.title} />
        <div className={styles.body}>
          {documentToReactComponents(body)}
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img src="/img/linked_in.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className={styles.jobs}>
        <h3>{positionsHeading}</h3>
        <div className={styles.gridWrapper}>
          <ul>
            {positions.map(pos => {
              const bodyPlainText = documentToPlainTextString(pos.fields.body)
              return (
                <li key={pos.sys.id}>
                  <h4>{pos.fields.position}</h4>
                  <p>{excerpts(bodyPlainText, { words: 30 })}</p>
                  <Link href={`/jobb/${pos.fields.slug}`}>
                    <a className={styles.readMoreLink}>
                      <span>Läs mer</span> <IoIosArrowDroprightCircle />
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default memo(WorkWithUsSection)
