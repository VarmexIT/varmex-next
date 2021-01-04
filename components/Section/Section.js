import cn from 'clsx'
import SectionHeading from '../SectionHeading/SectionHeading'
// import styles from './Section.module.scss'

const Section = ({ as: As = 'section', outerClassName, innerClassName, heading, children }) => {
  return (
    <As
      className={cn({
        [outerClassName]: !!outerClassName,
      })}
    >
      <SectionHeading>{heading}</SectionHeading>
      <div
        className={cn({
          [innerClassName]: innerClassName,
        })}
      >
        {children}
      </div>
    </As>
  )
}

export default Section
