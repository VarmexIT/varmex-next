import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import styles from './WorkWithUsSection.module.scss'

const WorkWithUsSection = () => {
  const { dontRender, data } = useCMSContent('workWithUs')

  if (dontRender) {
    return null
  }

  const { heading, image, body } = data?.items?.[0].fields

  return (
    <Section
      outerClassName={styles.workWithUsSection}
      innerClassName={styles.inner}
      heading={heading}
    >
      <img src={image.fields.file.url} alt={image.fields.title} />
      <div className={styles.body}>
        {documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({
              data: {
                target: { fields },
              },
            }) => <img src={fields.file.url} alt={fields.title} />,
          },
        })}
      </div>
    </Section>
  )
}

export default WorkWithUsSection
