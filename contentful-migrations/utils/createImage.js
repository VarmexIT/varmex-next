const createImage = (environment, locale, { title, description, fileName, uploadUrl }) => {
  return environment.createAsset({
    fields: {
      title: {
        [locale]: title,
      },
      description: {
        [locale]: description,
      },
      file: {
        [locale]: {
          contentType: 'image/jpeg',
          fileName,
          upload: uploadUrl,
        },
      },
    },
  })
}

module.exports = createImage
