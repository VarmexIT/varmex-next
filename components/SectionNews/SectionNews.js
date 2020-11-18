import { useQuery } from 'react-query'
import { getContentByContentTypeId } from '../../services/cms'
import NewsItem from '../NewsItem/NewsItem'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './SectionNews.module.scss'

const SectionNews = () => {
  const { status, data } = useQuery('sectionNews', () => getContentByContentTypeId('sectionNews'))
  const newsSection = data?.items[0]?.fields

  if (status === 'loading' || status === 'error') {
    return null
  }

  return (
    <section className={styles.sectionNews}>
      <SectionHeading>{newsSection.sectionHeading}</SectionHeading>
      <div className={styles.newsItemsWrapper}>
        {newsSection.newsPosts.map(({ sys: { id }, fields: post }) => (
          <NewsItem key={id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default SectionNews
