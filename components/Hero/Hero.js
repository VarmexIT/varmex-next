import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useCMSContent from '../../utils/hooks/useCMSContent'
import HeroItem from '../HeroItem/HeroItem'
import useInterval from '../../utils/hooks/useInterval'
import styles from './Hero.module.scss'

const Hero = () => {
  const { dontRender, status, data } = useCMSContent('hero')
  const [currentItem, setCurrentItem] = useState(0)
  const heroItems = data?.items?.[0]?.fields?.heroItems

  useInterval(() => {
    if (status === 'success') {
      const nextItem = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
      setCurrentItem(nextItem)
    }
  }, 5000)

  if (dontRender) {
    return null
  }

  return (
    <section className={styles.sectionHero}>
      <AnimatePresence initial={false}>
        <HeroItem key={heroItems[currentItem].sys.id} item={heroItems[currentItem]} />
      </AnimatePresence>
    </section>
  )
}

export default Hero
