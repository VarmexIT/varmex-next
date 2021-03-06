import Link from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import excerpts from 'excerpts'
import styles from './NewsList.module.scss'

const NewsList = ({ newsItems }) => {
  return (
    <ul className={styles.newsList}>
      {newsItems.map(({ sys: { id }, fields: newsItem }) => {
        const bodyPlainText = documentToPlainTextString(newsItem.body)

        return (
          <li key={id}>
            <img src={newsItem.image.fields.file.url} alt={newsItem.image.title} />
            <div className={styles.content}>
              <h3>
                <Link href={`/nyhet/${newsItem.slug}`}>{newsItem.title}</Link>
              </h3>
              <p>{excerpts(bodyPlainText, { words: 20 })}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default NewsList
