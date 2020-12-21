import styles from './SectionHeading.module.scss'

const SectionHeading = ({ children }) => {
  return <h2 className={styles.sectionHeading}>{children}</h2>
}

export default SectionHeading
