import { useState } from 'react'
import useCMSContent from '../../hooks/useCMSContent'
import SolutionCategory from '../SolutionCategory/SolutionCategory'
import styles from './SolutionsSection.styles'

const SolutionsSection = () => {
  const { dontRender, data } = useCMSContent('solutions')
  const [activeItem, setActiveItem] = useState([null, null])
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
    <styles.solutionsSection innerClassName="inner" slug="vara-losningar">
      {solutionCategories.map(({ sys: { id }, fields: category }, i) => (
        <SolutionCategory
          activeItem={activeItem}
          handleSetActiveItem={handleSetActiveItem}
          categoryIndex={i}
          key={id}
          category={category}
        />
      ))}
    </styles.solutionsSection>
  )
}

export default SolutionsSection
