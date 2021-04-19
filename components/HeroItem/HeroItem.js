/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import cn from 'clsx'
import { motion } from 'framer-motion'
import useNavigation from '../../hooks/useNavigation'
import { MENU_ITEMS, CONTENTFUL_CONTENT_TYPE_IDS } from '../../utils/constants'
import styles from './HeroItem.styles'

const HeroItem = ({ item }) => {
  const noDimmed = !item.fields.linkText && !item.fields.linkTarget && !item.fields.linkText

  return (
    <styles.heroItem
      as={motion.div}
      style={{
        backgroundImage: `url(${item.fields.image.fields.file.url})`,
      }}
      initial={{ filter: 'blur(5px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(5px)', opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <div
        className={cn('metaWrapper', {
          [styles.noDimmed]: noDimmed,
        })}
      >
        <div className="container">
          <h2>{item.fields.heading}</h2>
          {item.fields.linkText && (
            <>
              {item.fields.linkTarget ? (
                <LinkComponent item={item} />
              ) : (
                <h3>{item.fields.linkText}</h3>
              )}
            </>
          )}
        </div>
      </div>
    </styles.heroItem>
  )
}

const LinkComponent = ({ item }) => {
  const { navigate } = useNavigation()
  const sectionEntries = MENU_ITEMS.map(({ contentfulContentTypeId }) => contentfulContentTypeId)

  let link
  const { id: contentTypeId } = item.fields.linkTarget.sys.contentType.sys

  // Link goes to a section
  if (sectionEntries.includes(contentTypeId)) {
    const foundSlug = MENU_ITEMS.find(
      menuItem => menuItem.contentfulContentTypeId === contentTypeId
    )?.slug

    link = (
      <Link href="/" as={foundSlug} shallow>
        <a onClick={navigate}>{item.fields.linkText}</a>
      </Link>
    )
    // Link goes to a news item
  } else if (contentTypeId === CONTENTFUL_CONTENT_TYPE_IDS.newsItem) {
    link = (
      <Link href={`/nyhet/${item.fields.linkTarget.fields.slug}`}>
        <a>{item.fields.linkText}</a>
      </Link>
    )
  }

  return link
}

export default HeroItem
