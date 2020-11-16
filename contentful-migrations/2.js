const { createClient } = require('contentful-management')
const { parseHtml } = require('contentful-html-rich-text-converter')
const createImage = require('./utils/createImage')

module.exports = async function runMigration(_migration, { accessToken, spaceId, environmentId }) {
  const client = createClient({
    accessToken,
  })
  const space = await client.getSpace(spaceId)
  const environment = await space.getEnvironment(environmentId)

  const createNewsPost = ({ slug, title, image, preamble, body }) =>
    environment.createEntry('newsPost', {
      fields: {
        slug: {
          'sv-SE': slug,
        },
        title: {
          'sv-SE': title,
        },
        image: {
          'sv-SE': {
            sys: {
              id: image.sys.id,
              linkType: 'Asset',
              type: 'Link,',
            },
          },
        },
        preamble: {
          'sv-SE': preamble,
        },
        body: {
          'sv-SE': body,
        },
      },
    })

  const newsImage1 = await createImage(environment, 'sv-SE', {
    title: 'Nu byter vi logga och öppnar nytt kontor!',
    description: 'Värmex Logo',
    fileName: 'varmex-logo.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/aeeba0d5-2394-4401-9b0d-5116fcec45d6_Banner+nya+logon-1.png',
  })

  const newsImage2 = await createImage(environment, 'sv-SE', {
    title: 'Covid 19',
    description: 'Covid 19',
    fileName: 'covid-19.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/6f8ed165-a14e-450e-b86e-dcf18efe374e_Covid-19+liten.jpg',
  })

  const newsImage3 = await createImage(environment, 'sv-SE', {
    title: 'Sheraton Hotel',
    description: 'Sheraton Hotel',
    fileName: 'sheraton-hotel.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/51a8ff84-e1c2-4021-a0ff-32028b82b3af_shutterstock_545833060.jpg',
  })

  const newsImage4 = await createImage(environment, 'sv-SE', {
    title: 'Bostadsrätter',
    description: 'Bostadsrätter',
    fileName: 'bostadsratter.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/c57247d41e64516dcedf337768bb3ace6cd56e2d_shutterstock_645323449-2.jpg',
  })

  const newsImage5 = await createImage(environment, 'sv-SE', {
    title: 'Handbok',
    description: 'Handbok',
    fileName: 'handbok.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/73b66cf8f022a263fc2b449ec8029fd4e57e4935_bild-pa-boken.jpg',
  })

  const newsImage6 = await createImage(environment, 'sv-SE', {
    title: 'Forskning',
    description: 'Forskning',
    fileName: 'forskning.jpg',
    uploadUrl:
      'https://images.prismic.io/kungkryckan/162eabe6f81c5ebff9685e68af332ffc90ff5545_dator.jpg',
  })

  await newsImage1.processForAllLocales().then(asset => asset.publish())
  await newsImage2.processForAllLocales().then(asset => asset.publish())
  await newsImage3.processForAllLocales().then(asset => asset.publish())
  await newsImage4.processForAllLocales().then(asset => asset.publish())
  await newsImage5.processForAllLocales().then(asset => asset.publish())
  await newsImage6.processForAllLocales().then(asset => asset.publish())

  const newsPost1 = await createNewsPost({
    slug: 'nu-byter-vi-logga-och-oppnar-nytt-kontor',
    title: 'Nu byter vi logga och öppnar nytt kontor!',
    image: newsImage1,
    preamble: parseHtml(
      '<p>Vi tar nästa steg i utvecklingen med ny logotype och ett nytt kontor i Marievik!</p>'
    ),
    body: parseHtml(
      '<p>Första september tog vi ett historiskt kliv genom att öppna vårt andra kontor. Efter 35 år i Tyresö finns vi nu även i Marievik i Liljeholmen. Satsningen för Värmex närmare våra uppdragsgivare och underlättar vardagen för våra medarbetare genom att skapa en central mötesplats.</p><p>Samtidigt tar vi ett nytt kliv i utvecklingen och lanserar vårt nya utseende med en ny logotype!</p><p>Välkomna att besöka oss i Marievik på Årstaängsvägen 21b!</p>'
    ),
  })

  const newsPost2 = await createNewsPost({
    slug: 'till-dig-som-fatt-en-avisering-att-vi-ska-utfora-arbete',
    title: 'Till dig som fått en avisering att vi ska utföra arbete!',
    image: newsImage2,
    preamble: parseHtml(
      '<p>Med anledning av spridningen av Covid-19 ändrar vi till viss del hur vi arbetar. Här finns viktig information för dig som bor i ett hus där vi utför arbete.</p>'
    ),
    body: parseHtml(
      '<p>Med anledning av spridningen av Covid-19 vidtar vi vissa åtgärder som kan påverka dig som bor i ett hus där vi utför arbete.</p><p>Till dig som fått en avisering om att vi kommer för att utföra arbete i din lägenhet: Kontakta oss på 08-400 125 00 eller på info@varmex.se om du är hemma på grund av sjukdom eller för att du tillhör en riskgrupp och är hemma i syfte att begränsa dina sociala kontakter. Vi kommer då inte besöka din lägenhet utan göra ett nytt försök vid senare tillfälle.</p><p>Av integritetsskäl kommer våra tekniker ute på plats endast få veta att de inte ska besöka just din lägenhet, inte varför. Inga personuppgifter om hälsostatus kommer att lagras i denna behandling.</p><p>Har ni frågor gällande hur vi hanterar situationen är ni välkomna att höra av er till oss på kontaktuppgifterna ovan.</p>'
    ),
  })

  const newsPost3 = await createNewsPost({
    slug: 'styrelsemassan-2020',
    title: 'Styrelsemässan 2020',
    image: newsImage3,
    preamble: parseHtml(
      '<p>Kom och träffa oss tillsammans med Chemiclean på styrelsemässan på Sheraton den 6/2</p>'
    ),
    body: parseHtml(
      '<p>Styrelsemässan på Sheraton i Stockholm är en av de största mässorna i Sverige där representanter för bostadsrättsföreningar kan hämta inspiration till utveckling av sina fastigheter. Vi ställer i år ut tillsammans med Chemiclean och presenterar ett gemensamt koncept för uppdatering, rekonditionering och optimering av värmesystem.</p><p>Värmex och Chemiclean håller ett gemensamt föredrag på scen kl 18:10.</p><p>Styrelsemässan äger rum den 6 februari 2020 på Hotell Sheraton, Tegelbacken 6 101 23, Stockholm</p><p>Öppettider: 14.00 - 19.00</p>'
    ),
  })

  const newsPost4 = await createNewsPost({
    slug: 'energilosningar-for-bostadsrattsforeningar',
    title: 'Energilösningar för Bostadsrättsföreningar',
    image: newsImage4,
    preamble: parseHtml(
      '<p>Värmex släpper handbok om värmesystem riktat mot bostadsrättsföreningar</p>'
    ),
    body: parseHtml(
      '<p>Med mer än 30 års erfarenhet av arbete med injusteringar för bostadsrättsföreningar och fastighetsbolag har vi på Värmex lärt oss hur viktigt det är med samsyn, att beställare och leverantör förstår varandra.</p><p>Det är inte självklart enkelt. Inomhusklimat är ett rätt komplicerat yrkesområde med många facktermer, vilket kan göra en offert eller arbetsbeskrivning svår att förstå, och vi vet att missförstånd ibland kan uppstå.</p><p>För att minska risken för missförstånd – och för att försöka förenkla för dig som står inför ett värmeprojekt – tar vi därför fram den här handboken. I handboken beskriver vi vad ett värmesystem består av, hur det fungerar och vad de arbeten vi utför innebär för inomhusklimatet och dem som vistas i fastigheten.</p><p>Boken släpps under november och kan beställas genom att maila info@varmex.se . Boken är gratis fram till årsskiftet och kan därefter beställas mot självkostnadspris.</p>'
    ),
  })

  const newsPost5 = await createNewsPost({
    slug: 'handbok-om-varmesystem',
    title: 'Handbok om värmesystem!',
    image: newsImage5,
    preamble: parseHtml('<p>Handbok om värmesystem!</p>'),
    body: parseHtml(
      '<p>Med mer än 30 års erfarenhet av arbete med injusteringar för bostadsrättsföreningar och fastighetsbolag har vi på Värmex lärt oss hur viktigt det är med samsyn, att beställare och leverantör förstår varandra.</p><p>Det är inte självklart enkelt. Inomhusklimat är ett rätt komplicerat yrkesområde med många facktermer, vilket kan göra en offert eller arbetsbeskrivning svår att förstå, och vi vet att missförstånd ibland kan uppstå.</p><p>För att minska risken för missförstånd – och för att försöka förenkla för dig som står inför ett värmeprojekt – tar vi därför fram den här handboken. I handboken beskriver vi vad ett värmesystem består av, hur det fungerar och vad de arbeten vi utför innebär för inomhusklimatet och dem som vistas i fastigheten.</p><p>Boken släpps under november och kan beställas genom att maila info@varmex.se . Boken är gratis fram till årsskiftet och kan därefter beställas mot självkostnadspris.</p>'
    ),
  })

  const newsPost6 = await createNewsPost({
    slug: 'varmex-satsar-pa-forskning-om-vatskekopplad-varmeatervinning',
    title: 'Värmex satsar på forskning om vätskekopplad värmeåtervinning!',
    image: newsImage6,
    preamble: parseHtml(
      '<p>Värmex har under många år byggt upp en gedigen erfarenhet kring vätskekopplade värmeåtervinningssystem.</p>'
    ),
    body: parseHtml(
      '<p>Värmex har under många år byggt upp en gedigen erfarenhet kring vätskekopplade värmeåtervinningssystem. Erfarenheten visar att många system i befintliga fastigheter fungerar mycket dåligt med problem kopplade till alltifrån försmutsning av återvinningsbatterier till vätskekvalitet och flöde i återvinningskretsen.</p><p>Våren 2019 leder Värmex ett examensjobb i ämnet där fokus kommer ligga på optimering vätskeflöde samt vätskans kvalitet. Examensjobbet kommer utföras av Olle Engström som är masterstudent från installationsteknik på KTH under handledning av Mattias Ericsson.</p>'
    ),
  })

  const allNews = [newsPost1, newsPost2, newsPost3, newsPost4, newsPost5, newsPost6]
  allNews.forEach(news => news.publish())

  const sectionNews = await environment.createEntry('sectionNews', {
    fields: {
      sectionHeading: {
        'sv-SE': 'Nyheter',
      },
      newsPosts: {
        'sv-SE': allNews.map(newsPost => ({
          sys: {
            id: newsPost.sys.id,
            linkType: 'Entry',
            type: 'Link',
          },
        })),
      },
    },
  })

  sectionNews.publish()
}
