import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { HiArrowCircleRight } from 'react-icons/hi'
import { INLINES } from '@contentful/rich-text-types'
import useCMSContent from '../../hooks/useCMSContent'
import styles from './MaterialSection.styles'

const MaterialSection = () => {
  const { dontRender, data } = useCMSContent('material')

  if (dontRender) {
    return null
  }

  const { image, body } = data?.items?.[0].fields

  return (
    <styles.materialSection innerClassName="inner" slug="varmehandboken">
      <img src={image.fields.file.url} alt={image.fields.title} />
      <div className="body">
        {documentToReactComponents(body, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => (
              <span className="manualLinkWrapper">
                <Link href={node.data.uri}>
                  <a>
                    {children} <HiArrowCircleRight />
                  </a>
                </Link>
              </span>
            ),
          },
        })}
      </div>
    </styles.materialSection>
  )
}

export default MaterialSection
