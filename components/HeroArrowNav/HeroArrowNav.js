import cn from 'clsx'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import styles from './HeroArrowNav.module.scss'

const HeroArrowNav = ({ prev, next }) => {
  return (
    <>
      <button
        onClick={prev}
        type="button"
        className={cn(styles.arrow, styles.prev)}
        aria-label="Föregående"
      >
        <AiFillCaretLeft />
      </button>
      <button
        onClick={next}
        type="button"
        className={cn(styles.arrow, styles.next)}
        aria-label="Nästa"
      >
        <AiFillCaretRight />
      </button>
    </>
  )
}

export default HeroArrowNav
