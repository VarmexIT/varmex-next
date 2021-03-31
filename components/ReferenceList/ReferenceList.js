import Link from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import excerpts from 'excerpts'
import styles from './ReferenceList.module.scss'

const ReferenceList = ({ referenceItems }) => {
  return (
    <ul className={styles.referenceList}>
      {referenceItems.map(({ sys: { id }, fields: referenceItem }) => {
        const bodyPlainText = documentToPlainTextString(referenceItem.body)

        return (
          <li key={id}>
            <img src={referenceItem.image.fields.file.url} alt={referenceItem.image.title} />
            <div className={styles.content}>
              <h3>
                <Link href={`/referens/${referenceItem.slug}`}>{referenceItem.title}</Link>
              </h3>
              <p>{excerpts(bodyPlainText, { words: 20 })}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ReferenceList
