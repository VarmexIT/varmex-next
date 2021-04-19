// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { motion } from 'framer-motion'
// import { IoIosArrowDropdown } from 'react-icons/io'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './TheCompanyItem.styles'

// const EASE = [0.6, -0.05, 0.01, 0.99]

const TheCompanyItem = ({
  direction, // eslint-disable-line
  item: {
    sys: { id },
    fields: item,
  },
}) => {
  // console.log('direction:', direction)

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <styles.theCompanyItem
        as={motion.div}
        key={id}
        initial={{
          opacity: 0,
          // x: direction === 1 ? 400 : -400,
          // skewX: direction === 1 ? '-7deg' : '7deg',
        }}
        animate={{
          opacity: 1,
          x: 0,
          // skewX: '0deg',
        }}
        exit={{
          opacity: 0,
          // x: direction === 1 ? -400 : 400,
          // skewX: direction === 1 ? '-7deg' : '-7deg',
        }}
        layout
        transition={{
          // x: { duration: 0.4 },
          opacity: { duration: 0.3 },
          // skewX: { duration: 0.3 },
        }}
      >
        <img className="image" src={item.image.fields.file.url} alt={item.image.fields.title} />
        <div className="body">
          <h3>{item.title}</h3>
          {documentToReactComponents(item.body)}
        </div>
      </styles.theCompanyItem>
    </AnimatePresence>
  )
}

export default TheCompanyItem
