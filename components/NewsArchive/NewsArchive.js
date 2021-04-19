import NewsList from '../NewsList/NewsList'
import styles from './NewsArchive.styles'

const NewsArchive = ({ newsItems }) => {
  return (
    <styles.newsArchive noGutter>
      <h1>Nyhetsarkiv</h1>
      <NewsList newsItems={newsItems} />
    </styles.newsArchive>
  )
}

export default NewsArchive
