/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import cn from 'clsx'
import { motion } from 'framer-motion'
import useNavigation from '../../hooks/useNavigation'
import { MENU_ITEMS, CONTENTFUL_CONTENT_TYPE_IDS } from '../../utils/constants'
import styles from './HeroItem.styles'

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1.5,
    },
  },
}

const itemVariants = {
  initial: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.31, 0.07, 0.36, 0.93],
    },
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.31, 0.07, 0.36, 0.93],
    },
  },
}

const HeroItem = ({ item }) => {
  const noDimmed = !item.fields.linkText && !item.fields.linkTarget && !item.fields.linkText

  return (
    <styles.heroItem
      as={motion.div}
      style={{
        backgroundImage: `url(${item.fields.image.fields.file.url})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
    >
      <div
        className={cn('metaWrapper', {
          [styles.noDimmed]: noDimmed,
        })}
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          className="container"
        >
          <motion.h2 variants={itemVariants}>{item.fields.heading}</motion.h2>
          {item.fields.linkText && item.fields.linkTarget && (
            <LinkComponent item={item} variants={itemVariants} />
          )}
          {item.fields.linkText && !item.fields.linkTarget && (
            <motion.h3 variants={itemVariants}>{item.fields.linkText}</motion.h3>
          )}
        </motion.div>
      </div>
    </styles.heroItem>
  )
}

const LinkComponent = ({ item, variants }) => {
  const { navigate } = useNavigation()
  const sectionEntries = MENU_ITEMS.map(({ contentfulContentTypeId }) => contentfulContentTypeId)

  const { id: contentTypeId } = item.fields.linkTarget.sys.contentType.sys

  // Link goes to a section
  if (sectionEntries.includes(contentTypeId)) {
    const foundSlug = MENU_ITEMS.find(
      menuItem => menuItem.contentfulContentTypeId === contentTypeId
    )?.slug

    return (
      <Link href="/" as={foundSlug} shallow>
        <motion.a variants={variants} onClick={navigate}>
          {item.fields.linkText}
        </motion.a>
      </Link>
    )
  }

  // Link goes to a news item
  if (contentTypeId === CONTENTFUL_CONTENT_TYPE_IDS.newsItem) {
    return (
      <Link scroll={false} href={`/nyhet/${item.fields.linkTarget.fields.slug}`}>
        <motion.a variants={variants}>{item.fields.linkText}</motion.a>
      </Link>
    )
  }

  return null
}

export default HeroItem
