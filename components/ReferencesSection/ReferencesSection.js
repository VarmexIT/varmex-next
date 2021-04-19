import React from 'react'
import useCMSContent from '../../hooks/useCMSContent'
import ReferenceItem from '../ReferenceItem/ReferenceItem'
import styles from './ReferencesSection.styles'

const ReferencesSection = () => {
  const { dontRender, data } = useCMSContent('references')
  const references = data?.items?.[0].fields?.references

  if (dontRender) {
    return null
  }

  return (
    <styles.referencesSection innerClassName="inner" slug="referenser">
      {references.map(({ sys: { id }, fields: reference }) => (
        <ReferenceItem key={id} reference={reference} />
      ))}
    </styles.referencesSection>
  )
}

export default ReferencesSection
