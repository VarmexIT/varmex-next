import Container from '../Container/Container'
import NewsList from '../NewsList/NewsList'
import styles from './NewsArchive.module.scss'

const NewsArchive = ({ newsItems }) => {
  return (
    <Container noGutter className={styles.newsArchive}>
      <h1>Nyhetsarkiv</h1>
      <NewsList newsItems={newsItems} />
    </Container>
  )
}

export default NewsArchive
