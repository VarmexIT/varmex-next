import Link from 'next/link'
import styles from './ReferenceItem.styles'

const ReferenceItem = ({ reference }) => {
  return (
    <Link href={`/referens/${reference.slug}`}>
      <styles.referenceItem
        style={{
          backgroundImage: `url(${reference.image.fields.file.url})`,
        }}
      >
        <span>
          <h3>{reference.title}</h3>
        </span>
      </styles.referenceItem>
    </Link>
  )
}

export default ReferenceItem
