import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { HiArrowCircleRight } from 'react-icons/hi'
import excerpts from 'excerpts'
import useCMSContent from '../../hooks/useCMSContent'
import styles from './WorkWithUsSection.styles'

const WorkWithUsSection = () => {
  const { dontRender: workWithUsDontRender, data: workWithUsData } = useCMSContent('workWithUs')
  const { dontRender: dontRenderSiteSettings, data: dataSiteSettings } = useCMSContent(
    'siteSettings'
  )

  if (workWithUsDontRender || dontRenderSiteSettings) {
    return null
  }

  const { linkedInUrl } = dataSiteSettings?.items?.[0].fields
  const { image, body, positions } = workWithUsData?.items?.[0].fields

  return (
    <styles.workWithUsSection innerClassName="inner" slug="jobba-med-oss">
      <styles.content>
        <img src={image.fields.file.url} alt={image.fields.title} />
        <div className="body">
          {documentToReactComponents(body)}
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img src="/img/linked_in.png" alt="LinkedIn" />
          </a>
        </div>
      </styles.content>

      <styles.jobs>
        <div className="gridWrapper">
          <ul>
            {positions.map(pos => {
              const bodyPlainText = documentToPlainTextString(pos.fields.body)
              return (
                <li key={pos.sys.id}>
                  <h4>{pos.fields.position}</h4>
                  <p>{excerpts(bodyPlainText, { words: 30 })}</p>
                  <Link href={`/jobb/${pos.fields.slug}`}>
                    <a className="readMoreLink">
                      <span>Läs mer</span> <HiArrowCircleRight />
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </styles.jobs>
    </styles.workWithUsSection>
  )
}

export default WorkWithUsSection
