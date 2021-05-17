import { motion } from 'framer-motion'
import styles from './PageTransitions.styles'

const enterContainerVariants = {
  initial: {},
  animate: {
    display: 'none',
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {},
}

const enterPillarVariants = {
  initial: { scaleX: 1 },
  animate: delay => ({
    scaleX: 0,
    transition: {
      // duration: 0.5,
      duration: 0,
      ease: [0.41, 0.42, 0.4, 1.01],
      delay,
    },
  }),
  exit: {},
}

export const EnterAnimation = () => {
  return (
    <styles.container variants={enterContainerVariants} animate="animate" exit="exit">
      {[0, 0.2, 0.4, 0.6, 0.8].map(delay => (
        <motion.div className="right" key={delay} variants={enterPillarVariants} custom={delay} />
      ))}
    </styles.container>
  )
}

const exitContainerVariants = {
  initial: {
    display: 'none',
  },
  animate: {
    display: 'none',
  },
  exit: {
    display: 'flex',
  },
}

const exitPillarVariants = {
  initial: { scaleY: 0 },
  animate: { scaleY: 0 },
  exit: delay => ({
    scaleY: 1,
    transition: {
      // duration: 0.5,
      duration: 0,
      ease: [0.41, 0.42, 0.4, 1.01],
      delay,
    },
  }),
}

export const ExitAnimation = () => {
  return (
    <styles.container variants={exitContainerVariants} animate="animate" exit="exit">
      {[0.2, 0.05, 0.5, 0.3].map(delay => (
        <motion.div className="bottom" key={delay} variants={exitPillarVariants} custom={delay} />
      ))}
    </styles.container>
  )
}
