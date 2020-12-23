import useCMSContent from '../../utils/hooks/useCMSContent'
import NewsItemFeatured from '../NewsItemFeatured/NewsItemFeatured'
import NewsItems from '../NewsItems/NewsItems'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './NewsSection.module.scss'

const NewsSection = () => {
  const { dontRender: sectionDontRender, data: sectionData } = useCMSContent('news')
  const { dontRender: newsDontRender, data: newsData } = useCMSContent('newsItem')
  const heading = sectionData?.items?.[0].fields?.heading
  const [firstItem, ...newsItems] = newsData?.items

  if (sectionDontRender || newsDontRender) {
    return null
  }

  return (
    <section className={styles.newsSection}>
      <SectionHeading>{heading}</SectionHeading>
      <div className={styles.inner}>
        <NewsItemFeatured newsItem={firstItem} />
        <NewsItems newsItems={newsItems} />
      </div>
    </section>
  )
}

export default NewsSection
