import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import NewsItemFeatured from '../NewsItemFeatured/NewsItemFeatured'
import NewsItems from '../NewsItems/NewsItems'
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
    <Section
      outerClassName={styles.newsSection}
      innerClassName={styles.inner}
      heading={heading}
      slug="/nyheter"
    >
      <NewsItemFeatured newsItem={firstItem} />
      <NewsItems newsItems={newsItems} />
    </Section>
  )
}

export default NewsSection
