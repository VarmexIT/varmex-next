import styles from './HeroItem.module.scss'

const HeroItem = ({ item }) => {
  console.log('item:', item)
  return (
    <div
      className={styles.heroItem}
      style={{
        backgroundImage: `url(${item.fields.image.fields.file.url})`,
      }}
    >
      <div className={styles.metaWrapper}>
        <h2>{item.fields.title}</h2>
      </div>
    </div>
  )
}

export default HeroItem
