const { createClient } = require('contentful-management')
const createImage = require('./utils/createImage')

module.exports = async function runMigration(_migration, { accessToken, spaceId, environmentId }) {
  const client = createClient({
    accessToken,
  })
  const space = await client.getSpace(spaceId)
  const environment = await space.getEnvironment(environmentId)

  const heroImage1 = await createImage(environment, 'sv-SE', {
    title: 'Mattias',
    description: 'Mattias',
    fileName: 'mattias.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/35e306223854ba6ab13a745c21024d149504fc60_mattias2.jpg',
  })

  const heroImage2 = await createImage(environment, 'sv-SE', {
    title: 'Tele 2 Arena',
    description: 'Tele 2 Arena',
    fileName: 'tele2arena.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/1c79ef702e01d2d79945030de9f02c03341e1a52_tele2.jpg',
  })

  await heroImage1.processForAllLocales().then(asset => asset.publish())
  await heroImage2.processForAllLocales().then(asset => asset.publish())

  const heroItem1 = await environment.createEntry('heroItem', {
    fields: {
      title: {
        'sv-SE': 'Värmex',
      },
      image: {
        'sv-SE': {
          sys: {
            id: heroImage1.sys.id,
            linkType: 'Asset',
            type: 'Link',
          },
        },
      },
    },
  })

  const heroItem2 = await environment.createEntry('heroItem', {
    fields: {
      title: {
        'sv-SE': 'Tele 2 Arena',
      },
      image: {
        'sv-SE': {
          sys: {
            id: heroImage2.sys.id,
            linkType: 'Asset',
            type: 'Link',
          },
        },
      },
    },
  })

  heroItem1.publish()
  heroItem2.publish()

  const sectionHero = await environment.createEntry('sectionHero', {
    fields: {
      heroItems: {
        'sv-SE': [heroItem1, heroItem2].map(item => ({
          sys: {
            id: item.sys.id,
            linkType: 'Entry',
            type: 'Link',
          },
        })),
      },
    },
  })

  sectionHero.publish()
}
