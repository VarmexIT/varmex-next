import cn from 'clsx'
import styles from './HeroDotNav.module.scss'

const HeroDotNav = ({ items, currentItem, setCurrentItem }) => {
  return (
    <nav className={styles.heroDotNav}>
      <ul>
        {items.map((id, i) => (
          <li key={id}>
            <button
              className={cn({ [styles.current]: i === currentItem })}
              type="button"
              onClick={() => setCurrentItem(i)}
              aria-label={`Sida ${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeroDotNav
