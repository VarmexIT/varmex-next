import cn from 'clsx'
import { motion } from 'framer-motion'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { RiArrowDropDownFill } from 'react-icons/ri'
import styles from './SolutionItem.module.scss'

const EASE = [0.6, -0.05, 0.01, 0.99]

const SolutionItem = ({ categoryIndex, itemIndex, solution, activeItem, handleSetActiveItem }) => {
  const isActive = activeItem[0] === categoryIndex && activeItem[1] === itemIndex

  return (
    <>
      <dt
        className={cn(styles.title, {
          [styles.active]: !!isActive,
        })}
      >
        <button type="button" onClick={() => handleSetActiveItem([categoryIndex, itemIndex])}>
          {solution.title}
          <motion.span
            animate={{
              rotate: isActive ? 180 : 0,
            }}
            transition={{
              ease: EASE,
            }}
          >
            <RiArrowDropDownFill />
          </motion.span>
        </button>
      </dt>
      <motion.dd
        className={styles.body}
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: isActive ? 'auto' : 0,
          opacity: isActive ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            x: isActive ? 0 : -16,
          }}
          transition={{
            ease: EASE,
          }}
          className={styles.inner}
        >
          {documentToReactComponents(solution.body)}
        </motion.div>
      </motion.dd>
    </>
  )
}

export default SolutionItem
