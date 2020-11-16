import { useState } from 'react'
import { useQuery } from 'react-query'
import { getContentByContentTypeId } from '../../services/cms'
import HeroItem from '../HeroItem/HeroItem'
import useInterval from '../../utils/hooks/useInterval'
import styles from './Hero.module.scss'

const Hero = () => {
  const { status, data } = useQuery('sectionHero', () => getContentByContentTypeId('sectionHero'))
  const [currentItem, setCurrentItem] = useState(0)
  const heroItems = data?.items[0]?.fields?.heroItems

  useInterval(() => {
    if (status === 'success') {
      const nextItem = currentItem === heroItems.length - 1 ? 0 : currentItem + 1
      setCurrentItem(nextItem)
    }
  }, 5000)

  if (status === 'loading' || status === 'error') {
    return null
  }

  return (
    <section className={styles.sectionHero}>
      <HeroItem key={heroItems[currentItem].sys.id} item={heroItems[currentItem]} />
    </section>
  )
}

export default Hero
