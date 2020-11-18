import Link from 'next/link'
import styles from './HeroItem.module.scss'

const HeroItem = ({ item }) => {
  return (
    <div
      className={styles.heroItem}
      style={{
        backgroundImage: `url(${item.fields.image.fields.file.url})`,
      }}
    >
      <div className={styles.metaWrapper}>
        <h2>{item.fields.title}</h2>
        {item.fields.linkText ? (
          <Link href="/">
            <a>{item.fields.linkText}</a>
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default HeroItem
