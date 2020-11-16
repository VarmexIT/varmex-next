// eslint-disable-next-line no-unused-vars
module.exports = function runMigration(migration) {
  // NEWS POST
  const newsPost = migration.createContentType('newsPost').name('News Post').displayField('title')

  newsPost
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 64,
        },
      },
      {
        regexp: {
          pattern: '^[a-z0-9]+(?:-[a-z0-9]+)*$',
          flags: null,
        },
        message:
          'A slug can only contain lowercase letters, numbers and dashes for example: this-is-a-slug-01',
      },
    ])

  newsPost
    .createField('title')
    .name('Title')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 128,
        },
      },
    ])

  newsPost
    .createField('image')
    .name('Image')
    .type('Link')
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ])
    .linkType('Asset')

  newsPost
    .createField('preamble')
    .name('Preamble')
    .type('RichText')
    .localized(true)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: 'Marks are not allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Nodes are not allowed',
      },
      {
        nodes: {},
      },
    ])

  newsPost
    .createField('body')
    .name('Body')
    .type('RichText')
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: 'Marks are not allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Nodes are not allowed',
      },
      {
        nodes: {},
      },
    ])

  // SECTION NEWS
  const sectionNews = migration
    .createContentType('sectionNews')
    .name('Section > News')
    .displayField('sectionHeading')

  sectionNews
    .createField('sectionHeading')
    .name('Section Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 64,
        },
      },
    ])

  sectionNews
    .createField('newsPosts')
    .name('News Posts')
    .type('Array')
    .required(true)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['newsPost'],
        },
      ],
      linkType: 'Entry',
    })
}
