import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import useCMSContent from '../../utils/hooks/useCMSContent'
import SolutionCategory from '../SolutionCategory/SolutionCategory'
import styles from './Solutions.module.scss'

const Solutions = () => {
  const { dontRender, data } = useCMSContent('solutions')
  const [activeItem, setActiveItem] = useState([null, null])
  const heading = data?.items?.[0].fields?.heading
  const solutionCategories = data?.items?.[0].fields?.solutionCategories

  if (dontRender) {
    return null
  }

  const handleSetActiveItem = ([itemIndex, categoryIndex]) => {
    const newIndexes =
      activeItem[0] === itemIndex && activeItem[1] === categoryIndex
        ? [null, null]
        : [itemIndex, categoryIndex]
    setActiveItem(newIndexes)
  }

  return (
    <section className={styles.solutions}>
      <SectionHeading>{heading}</SectionHeading>
      <div className={styles.inner}>
        {solutionCategories.map(({ sys: { id }, fields: category }, i) => (
          <SolutionCategory
            activeItem={activeItem}
            handleSetActiveItem={handleSetActiveItem}
            categoryIndex={i}
            key={id}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}

export default Solutions
