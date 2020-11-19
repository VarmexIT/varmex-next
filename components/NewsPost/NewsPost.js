import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import styles from './NewsPost.module.scss'

const NewsPost = ({ post }) => {
  return (
    <article className={styles.newsPost}>
      <img
        src={post.image.fields.file.url}
        alt={post.image.fields.description}
        className={styles.displayImage}
      />
      <div className={styles.body}>
        <h2>
          <Link href={`/nyheter/${post.slug}`}>{post.title}</Link>
        </h2>
        {documentToReactComponents(post.preamble)}

        <Link href={`/nyheter/${post.slug}`}>
          <a className={styles.readMore}>Läs hela nyheten.</a>
        </Link>
      </div>
    </article>
  )
}

export default NewsPost