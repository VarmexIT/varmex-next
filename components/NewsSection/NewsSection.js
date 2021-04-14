import Link from 'next/link'
import { HiArrowCircleRight } from 'react-icons/hi'
import useCMSContent from '../../hooks/useCMSContent'
import Section from '../Section/Section'
import NewsItemFeatured from '../NewsItemFeatured/NewsItemFeatured'
import NewsItems from '../NewsItems/NewsItems'
import styles from './NewsSection.module.scss'

const NewsSection = () => {
  const { dontRender, data: newsData } = useCMSContent('newsItem')
  const [firstItem, ...newsItems] = newsData?.items.slice(0, 4)

  if (dontRender) {
    return null
  }

  return (
    <Section outerClassName={styles.newsSection} innerClassName={styles.inner} slug="nyheter">
      <NewsItemFeatured newsItem={firstItem} />

      <div className={styles.newsItemsWrapper}>
        <NewsItems newsItems={newsItems} />
        <Link href="/nyhetsarkiv">
          <a className={styles.readMoreNews}>
            Läs mer nyheter här <HiArrowCircleRight />
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default NewsSection
