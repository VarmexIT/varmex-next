import Link from 'next/link'
import { HiArrowCircleRight } from 'react-icons/hi'
import useCMSContent from '../../hooks/useCMSContent'
import NewsItemFeatured from '../NewsItemFeatured/NewsItemFeatured'
import NewsItems from '../NewsItems/NewsItems'
import styles from './NewsSection.styles'

const NewsSection = () => {
  const { dontRender, data: newsData } = useCMSContent('newsItem')
  const [firstItem, ...newsItems] = newsData?.items.slice(0, 4)

  if (dontRender) {
    return null
  }

  return (
    <styles.newsSection innerClassName="inner" slug="nyheter">
      <NewsItemFeatured newsItem={firstItem} />

      <div className="newsItemsWrapper">
        <NewsItems newsItems={newsItems} />
        <Link scroll={false} href="/nyhetsarkiv">
          <a className="readMoreNews">
            Läs mer nyheter här <HiArrowCircleRight />
          </a>
        </Link>
      </div>
    </styles.newsSection>
  )
}

export default NewsSection
