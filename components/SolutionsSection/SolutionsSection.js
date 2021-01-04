import { useState } from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import SolutionCategory from '../SolutionCategory/SolutionCategory'
import styles from './SolutionsSection.module.scss'

const SolutionsSection = () => {
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
    <Section
      outerClassName={styles.solutionsSection}
      innerClassName={styles.inner}
      heading={heading}
    >
      {solutionCategories.map(({ sys: { id }, fields: category }, i) => (
        <SolutionCategory
          activeItem={activeItem}
          handleSetActiveItem={handleSetActiveItem}
          categoryIndex={i}
          key={id}
          category={category}
        />
      ))}
    </Section>
  )
}

export default SolutionsSection
