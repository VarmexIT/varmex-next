import { createClient } from 'contentful'

export const contentfulClient = createClient({
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CDA_KEY,
})

export const getContentByContentTypeId = (contentTypeId, locale) => {
  return contentfulClient
    .getEntries({
      content_type: contentTypeId,
      locale,
      include: 5,
    })
    .then(response => response)
}

export const getNewsItemBySlug = (slug, locale) => {
  return contentfulClient
    .getEntries({
      content_type: 'newsPost',
      locale,
      'fields.slug[in]': slug,
      include: 5,
    })
    .then(response => response.items[0])
}
