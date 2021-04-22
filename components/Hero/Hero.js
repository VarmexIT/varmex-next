import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useCMSContent from '../../hooks/useCMSContent'
import useInterval from '../../hooks/useInterval'
import HeroItem from '../HeroItem/HeroItem'
import HeroDotNav from '../HeroDotNav/HeroDotNav'
import HeroArrowNav from '../HeroArrowNav/HeroArrowNav'
import styles from './Hero.styles'

const Hero = () => {
  const { dontRender, status, data } = useCMSContent('hero')
  const [currentItem, setCurrentItem] = useState(0)
  const heroItems = data?.items?.[0]?.fields?.heroItems

  useInterval(() => {
    if (status === 'success') {
      const nextItem = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
      setCurrentItem(nextItem)
    }
  }, 7000)

  if (dontRender) {
    return null
  }

  const prev = () => {
    const newIndex = currentItem === 0 ? heroItems.length - 1 : currentItem - 1
    setCurrentItem(newIndex)
  }

  const next = () => {
    const newIndex = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
    setCurrentItem(newIndex)
  }

  return (
    <styles.hero id="hero">
      <AnimatePresence initial={false}>
        <HeroItem key={heroItems[currentItem].sys.id} item={heroItems[currentItem]} />
      </AnimatePresence>
      <HeroDotNav
        items={heroItems.map(({ sys: { id } }) => id)}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <HeroArrowNav prev={prev} next={next} />
    </styles.hero>
  )
}

export default Hero
