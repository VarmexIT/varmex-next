import Link from 'next/link'
import { HiArrowCircleRight } from 'react-icons/hi'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import NewsItemFeatured from '../NewsItemFeatured/NewsItemFeatured'
import NewsItems from '../NewsItems/NewsItems'
import styles from './NewsSection.module.scss'

const NewsSection = () => {
  const { dontRender: sectionDontRender, data: sectionData } = useCMSContent('news')
  const { dontRender: newsDontRender, data: newsData } = useCMSContent('newsItem')
  const heading = sectionData?.items?.[0].fields?.heading
  const [firstItem, ...newsItems] = newsData?.items.slice(0, 4)

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
