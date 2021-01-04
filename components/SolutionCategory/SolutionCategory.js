import SolutionItem from '../SolutionItem/SolutionItem'
import styles from './SolutionCategory.module.scss'

const SolutionCategory = ({ activeItem, handleSetActiveItem, categoryIndex, category }) => {
  return (
    <div className={styles.solutionCategory}>
      <h3>{category.title}</h3>
      {category.solutions.map(({ sys: { id }, fields: solution }, i) => (
        <SolutionItem
          key={id}
          categoryIndex={categoryIndex}
          itemIndex={i}
          activeItem={activeItem}
          handleSetActiveItem={handleSetActiveItem}
          solution={solution}
        />
      ))}
    </div>
  )
}

export default SolutionCategory
