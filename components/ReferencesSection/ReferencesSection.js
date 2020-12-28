import React from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import ReferenceItem from '../ReferenceItem/ReferenceItem'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './ReferencesSection.module.scss'

const ReferencesSection = () => {
  const { dontRender, data } = useCMSContent('references')
  const heading = data?.items?.[0].fields?.heading
  const references = data?.items?.[0].fields?.references

  if (dontRender) {
    return null
  }

  return (
    <section className={styles.referencesSection}>
      <SectionHeading>{heading}</SectionHeading>
      <div className={styles.inner}>
        {references.map(({ sys: { id }, fields: reference }) => (
          <ReferenceItem key={id} reference={reference} />
        ))}
      </div>
    </section>
  )
}

export default ReferencesSection
