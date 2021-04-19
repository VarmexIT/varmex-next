import cn from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Spinner.styles'

const Spinner = ({ className, show = false }) => (
  <AnimatePresence>
    {show ? (
      <styles.spinner
        as={motion.span}
        className={cn({
          [className]: !!className,
        })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    ) : null}
  </AnimatePresence>
)

export default Spinner
