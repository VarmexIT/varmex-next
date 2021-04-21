import Link from 'next/link'
import excerpts from 'excerpts'
import cn from 'clsx'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import styles from './NewsItems.styles'

const NewsItems = ({ className, newsItems }) => {
  return (
    <styles.newsItems
      className={cn({
        [className]: !!className,
      })}
    >
      {newsItems.map(({ sys: { id }, fields: newsItem }) => {
        const bodyPlainText = documentToPlainTextString(newsItem.body)

        return (
          <article key={id}>
            <img src={newsItem.image.fields.file.url} alt={newsItem.image.fields.title} />
            <styles.content>
              <h3>
                <Link scroll={false} href={`/nyhet/${newsItem.slug}`}>
                  {newsItem.title}
                </Link>
              </h3>
              <p className="excerpts">{excerpts(bodyPlainText, { characters: 70 })}</p>
            </styles.content>
          </article>
        )
      })}
    </styles.newsItems>
  )
}

export default NewsItems
