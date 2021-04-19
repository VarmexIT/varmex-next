import cn from 'clsx'
import styles from './Section.styles'

const Section = ({ innerProps = {}, innerClassName, slug, children, ...restProps }) => {
  return (
    <styles.section id={slug} {...restProps}>
      <hr />
      <div
        className={cn({
          [innerClassName]: !!innerClassName,
        })}
        {...innerProps}
      >
        {children}
      </div>
    </styles.section>
  )
}

export default Section
