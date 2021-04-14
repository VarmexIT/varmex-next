import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { HiArrowCircleRight } from 'react-icons/hi'
import { INLINES } from '@contentful/rich-text-types'
import useCMSContent from '../../hooks/useCMSContent'
import Section from '../Section/Section'
import styles from './MaterialSection.module.scss'

const MaterialSection = () => {
  const { dontRender, data } = useCMSContent('material')

  if (dontRender) {
    return null
  }

  const { image, body } = data?.items?.[0].fields

  return (
    <Section outerClassName={styles.materialSection} innerClassName={styles.inner} slug="material">
      <img src={image.fields.file.url} alt={image.fields.title} />
      <div className={styles.body}>
        {documentToReactComponents(body, {
          renderNode: {
            [INLINES.ASSET_HYPERLINK]: (node, children) => (
              <span className={styles.manualLinkWrapper}>
                <a href={node.data.target.fields.file.url} title={node.data.target.fields.title}>
                  {children} <HiArrowCircleRight />
                </a>
              </span>
            ),
          },
        })}
      </div>
    </Section>
  )
}

export default MaterialSection
