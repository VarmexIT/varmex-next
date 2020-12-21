import Link from 'next/link'
import Container from '../Container/Container'
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
        <Container className={styles.container}>
          <h2>{item.fields.heading}</h2>
          {item.fields.linkText ? (
            <Link href="/">
              <a>{item.fields.linkText}</a>
            </Link>
          ) : (
            <Link href="/">
              <a>Läs mer om grejen här</a>
            </Link>
          )}
        </Container>
      </div>
    </div>
  )
}

export default HeroItem
