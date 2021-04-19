import cn from 'clsx'
import styles from './HeroDotNav.styles'

const HeroDotNav = ({ items, currentItem, setCurrentItem }) => {
  return (
    <styles.heroDotNav>
      <ul>
        {items.map((id, i) => (
          <li key={id}>
            <button
              className={cn({
                current: i === currentItem,
              })}
              type="button"
              onClick={() => setCurrentItem(i)}
              aria-label={`Sida ${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </styles.heroDotNav>
  )
}

export default HeroDotNav
