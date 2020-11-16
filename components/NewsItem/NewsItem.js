import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './NewsItem.module.scss'

const NewsItem = ({ post }) => {
  return (
    <article
      className={styles.newsItem}
      style={{
        backgroundImage: `url(${post.image.fields.file.url})`,
      }}
    >
      {/* <img src={post.image.fields.file.url} alt={post.image.fields.description} /> */}
      <div className={styles.inner}>
        <h3>{post.title}</h3>
        {documentToReactComponents(post.preamble)}

        <Link href={`/nyheter/${post.slug}`}>Läs mer</Link>
      </div>
    </article>
  )
}

export default NewsItem
