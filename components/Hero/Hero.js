import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSection } from '../../contexts/SectionContext'
import useCMSContent from '../../utils/hooks/useCMSContent'
import HeroItem from '../HeroItem/HeroItem'
import HeroDotNav from '../HeroDotNav/HeroDotNav'
import HeroArrowNav from '../HeroArrowNav/HeroArrowNav'
import useInterval from '../../utils/hooks/useInterval'
import styles from './Hero.module.scss'

const Hero = () => {
  const { registerSection } = useSection()
  const { dontRender, status, data } = useCMSContent('hero')
  const [currentItem, setCurrentItem] = useState(1)
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

  const prev = () => {
    const newIndex = currentItem === 0 ? heroItems.length - 1 : currentItem - 1
    setCurrentItem(newIndex)
  }

  const next = () => {
    const newIndex = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
    setCurrentItem(newIndex)
  }

  return (
    <section className={styles.sectionHero} ref={ref => registerSection('/', ref)} id="/">
      <AnimatePresence initial={false}>
        <HeroItem key={heroItems[currentItem].sys.id} item={heroItems[currentItem]} />
      </AnimatePresence>
      <HeroDotNav
        items={heroItems.map(({ sys: { id } }) => id)}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <HeroArrowNav prev={prev} next={next} />
    </section>
  )
}

export default Hero
