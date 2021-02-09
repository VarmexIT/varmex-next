import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useCMSContent from '../../utils/hooks/useCMSContent'
import HeroItem from '../HeroItem/HeroItem'
import HeroDotNav from '../HeroDotNav/HeroDotNav'
import useInterval from '../../utils/hooks/useInterval'
import styles from './Hero.module.scss'

const Hero = () => {
  const { dontRender, status, data } = useCMSContent('hero')
  const [currentItem, setCurrentItem] = useState(1)
  const heroItems = data?.items?.[0]?.fields?.heroItems

  // useInterval(() => {
  //   if (status === 'success') {
  //     const nextItem = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
  //     setCurrentItem(nextItem)
  //   }
  // }, 5000)

  if (dontRender) {
    return null
  }

  return (
    <section className={styles.sectionHero}>
      <AnimatePresence initial={false}>
        <HeroItem key={heroItems[currentItem].sys.id} item={heroItems[currentItem]} />
      </AnimatePresence>
      <HeroDotNav
        items={heroItems.map(({ sys: { id } }) => id)}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </section>
  )
}

export default Hero
