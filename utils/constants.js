export const CONTENTFUL_CONTENT_TYPE_IDS = {
  theCompany: 'theCompany',
  news: 'news',
  references: 'references',
  solutions: 'solutions',
  material: 'material',
  workWithUs: 'workWithUs',
  contact: 'contact',
  newsItem: 'newsItem',
}

export const MENU_ITEMS = [
  {
    slug: 'foretaget',
    linkText: 'Företaget',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.theCompany,
  },
  {
    slug: 'nyheter',
    linkText: 'Nyheter',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.news,
  },
  {
    slug: 'referenser',
    linkText: 'Referenser',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.references,
  },
  {
    slug: 'vara-losningar',
    linkText: 'Våra lösningar',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.solutions,
  },
  {
    slug: 'material',
    linkText: 'Material',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.material,
  },
  {
    slug: 'jobba-med-oss',
    linkText: 'Jobba med oss',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.workWithUs,
  },
  {
    slug: 'kontakt',
    linkText: 'Kontakt',
    contentfulContentTypeId: CONTENTFUL_CONTENT_TYPE_IDS.contact,
  },
]
