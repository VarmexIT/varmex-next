import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import styles from './HeroArrowNav.styles'

const HeroArrowNav = ({ prev, next }) => {
  return (
    <>
      <styles.arrow onClick={prev} type="button" className="prev" aria-label="Föregående">
        <AiFillCaretLeft />
      </styles.arrow>
      <styles.arrow onClick={next} type="button" className="next" aria-label="Nästa">
        <AiFillCaretRight />
      </styles.arrow>
    </>
  )
}

export default HeroArrowNav
