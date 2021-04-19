import Link from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import excerpts from 'excerpts'
import styles from './NewsList.styles'

const NewsList = ({ newsItems }) => {
  return (
    <styles.newsList>
      {newsItems.map(({ sys: { id }, fields: newsItem }) => {
        const bodyPlainText = documentToPlainTextString(newsItem.body)

        return (
          <li key={id}>
            <img src={newsItem.image.fields.file.url} alt={newsItem.image.title} />
            <styles.content>
              <h3>
                <Link href={`/nyhet/${newsItem.slug}`}>{newsItem.title}</Link>
              </h3>
              <p>{excerpts(bodyPlainText, { words: 20 })}</p>
            </styles.content>
          </li>
        )
      })}
    </styles.newsList>
  )
}

export default NewsList
