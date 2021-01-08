import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import styles from './WorkWithUsSection.module.scss'

const WorkWithUsSection = () => {
  const { dontRender, data } = useCMSContent('workWithUs')

  if (dontRender) {
    return null
  }

  const { heading, image, body, linkedInUrl, positionsHeading, positions } = data?.items?.[0].fields

  return (
    <Section
      outerClassName={styles.workWithUsSection}
      innerClassName={styles.inner}
      heading={heading}
    >
      <div className={styles.content}>
        <img src={image.fields.file.url} alt={image.fields.title} />
        <div className={styles.body}>
          {documentToReactComponents(body)}
          {linkedInUrl && (
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <img src="/img/linked_in.png" alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>

      <div className={styles.jobs}>
        <h3>{positionsHeading}</h3>
        <ul>
          {positions.map(pos => (
            <li key={pos.sys.id}>{pos.fields.position}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default WorkWithUsSection
