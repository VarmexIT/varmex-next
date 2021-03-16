import safeJsonStringify from 'safe-json-stringify'
import { createClient } from 'contentful'

export const contentfulClient = createClient({
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CDA_KEY,
})

export const getContentByContentTypeId = (contentTypeId, locale) => {
  return contentfulClient
    .getEntries({
      content_type: contentTypeId,
      locale,
      include: 5,
    })
    .then(response => JSON.parse(safeJsonStringify(response)))
}

export const getNewsItemBySlug = (slug, locale) => {
  return contentfulClient
    .getEntries({
      content_type: 'newsItem',
      locale,
      'fields.slug[in]': slug,
      include: 5,
    })
    .then(response => response.items[0])
}

export const getReferenceItemBySlug = (slug, locale) => {
  return contentfulClient
    .getEntries({
      content_type: 'referenceItem',
      locale,
      'fields.slug[in]': slug,
      include: 5,
    })
    .then(response => response.items[0])
}

export const getJobItemBySlug = (slug, locale) => {
  return contentfulClient
    .getEntries({
      content_type: 'job',
      locale,
      'fields.slug[in]': slug,
      include: 5,
    })
    .then(response => response.items[0])
}
