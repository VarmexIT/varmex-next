import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { motion } from 'framer-motion'
import { IoIosArrowDropdown } from 'react-icons/io'
import styles from './CompanyItem.module.scss'

const EASE = [0.6, -0.05, 0.01, 0.99]

const CompanyItem = ({ item, i, activeItem, toggleActive }) => {
  const isActive = i === activeItem

  return (
    <>
      <dt className={styles.title}>
        <button type="button" onClick={() => toggleActive(i)}>
          <motion.span
            animate={{
              rotate: isActive ? 180 : 0,
            }}
            transition={{
              ease: EASE,
            }}
          >
            <IoIosArrowDropdown />
          </motion.span>{' '}
          {item.fields.title}
        </button>
      </dt>
      <motion.dd
        className={styles.body}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            x: isActive ? 0 : -32,
          }}
          transition={{
            ease: EASE,
          }}
          className={styles.inner}
        >
          {documentToReactComponents(item.fields.body)}
        </motion.div>
      </motion.dd>
    </>
  )
}

export default CompanyItem
