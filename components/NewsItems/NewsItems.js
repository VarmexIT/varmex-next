import Link from 'next/link'
import excerpts from 'excerpts'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import styles from './NewsItems.module.scss'

const NewsItems = ({ newsItems }) => {
  return (
    <div className={styles.newsItems}>
      {newsItems.map(({ sys: { id }, fields: newsItem }) => {
        const bodyPlainText = documentToPlainTextString(newsItem.body)

        return (
          <article key={id}>
            <img src={newsItem.image.fields.file.url} alt={newsItem.image.fields.title} />
            <div className={styles.content}>
              <h3>
                <Link href={`/nyhet/${newsItem.slug}`}>{newsItem.title}</Link>
              </h3>
              <p className={styles.excerpts}>{excerpts(bodyPlainText, { characters: 70 })}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default NewsItems
