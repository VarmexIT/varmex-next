import Link from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import excerpts from 'excerpts'
import styles from './NewsItemFeatured.module.scss'

const NewsItemFeatured = ({ newsItem }) => {
  const bodyPlainText = documentToPlainTextString(newsItem.fields.body)

  return (
    <article className={styles.newsItemFeatured}>
      <img src={newsItem.fields.image.fields.file.url} alt={newsItem.fields.image.fields.title} />
      <div className={styles.content}>
        <h3>
          <Link href={`/nyhet/${newsItem.fields.slug}`}>{newsItem.fields.title}</Link>
        </h3>
        <div className={styles.preamble}>{excerpts(bodyPlainText, { words: 20 })}</div>
      </div>
    </article>
  )
}

export default NewsItemFeatured
