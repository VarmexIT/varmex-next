import cn from 'clsx'
import Container from '../Container/Container'
import styles from './SectionHeading.module.scss'

const SectionHeading = ({ children, className, ...restProps }) => {
  return (
    <div className={styles.headingWrapper}>
      <Container
        as="h2"
        className={cn(styles.sectionHeading, {
          [className]: !!className,
        })}
        {...restProps}
      >
        {children}
      </Container>
    </div>
  )
}

export default SectionHeading
