import React from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import ReferenceItem from '../ReferenceItem/ReferenceItem'
import Section from '../Section/Section'
import styles from './ReferencesSection.module.scss'

const ReferencesSection = () => {
  const { dontRender, data } = useCMSContent('references')
  const heading = data?.items?.[0].fields?.heading
  const references = data?.items?.[0].fields?.references

  if (dontRender) {
    return null
  }

  return (
    <Section
      outerClassName={styles.referencesSection}
      innerClassName={styles.inner}
      heading={heading}
    >
      {references.map(({ sys: { id }, fields: reference }) => (
        <ReferenceItem key={id} reference={reference} />
      ))}
    </Section>
  )
}

export default ReferencesSection
