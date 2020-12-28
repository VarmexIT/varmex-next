import Link from 'next/link'
import styles from './ReferenceItem.module.scss'

const ReferenceItem = ({ reference }) => {
  return (
    <Link href={`/referens/${reference.slug}`}>
      <a
        className={styles.referenceItem}
        style={{
          backgroundImage: `url(${reference.image.fields.file.url})`,
        }}
      >
        <span>
          <h3>{reference.title}</h3>
        </span>
      </a>
    </Link>
  )
}

export default ReferenceItem
