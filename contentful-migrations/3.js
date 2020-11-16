// eslint-disable-next-line no-unused-vars
module.exports = function runMigration(migration) {
  // HERO ITEM
  const heroItem = migration.createContentType('heroItem').name('Hero Item').displayField('title')

  heroItem
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

  heroItem
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

  // SECTION HERO
  const sectionHero = migration
    .createContentType('sectionHero')
    .name('Section > Hero')
    .displayField('heroItems')

  sectionHero
    .createField('heroItems')
    .name('Hero Items')
    .type('Array')
    .required(true)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['heroItem'],
        },
      ],
      linkType: 'Entry',
    })
}
