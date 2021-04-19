import Link from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import excerpts from 'excerpts'
import styles from './NewsItemFeatured.styles'

const NewsItemFeatured = ({ newsItem }) => {
  const bodyPlainText = documentToPlainTextString(newsItem.fields.body)

  return (
    <styles.newsItemFeatured>
      <img src={newsItem.fields.image.fields.file.url} alt={newsItem.fields.image.fields.title} />
      <styles.content>
        <h3>
          <Link href={`/nyhet/${newsItem.fields.slug}`}>{newsItem.fields.title}</Link>
        </h3>
        <div className="preamble">
          <p>{excerpts(bodyPlainText, { words: 50 })}</p>
        </div>
      </styles.content>
    </styles.newsItemFeatured>
  )
}

export default NewsItemFeatured
