import cn from 'clsx'
import { motion } from 'framer-motion'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { RiArrowDropDownFill } from 'react-icons/ri'
import styles from './SolutionItem.styles'

const EASE = [0.6, -0.05, 0.01, 0.99]

const SolutionItem = ({ categoryIndex, itemIndex, solution, activeItem, handleSetActiveItem }) => {
  const isActive = activeItem[0] === categoryIndex && activeItem[1] === itemIndex

  return (
    <>
      <styles.title
        className={cn({
          active: !!isActive,
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
      </styles.title>
      <styles.body
        as={motion.dd}
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
          className="inner2"
        >
          {documentToReactComponents(solution.body)}
        </motion.div>
      </styles.body>
    </>
  )
}

export default SolutionItem
