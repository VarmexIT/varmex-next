import cn from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Spinner.module.scss'

const Spinner = ({ className, as: As = motion.span, show = false }) => (
  <AnimatePresence>
    {show ? (
      <As
        className={cn(styles.spinner, {
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
