module.exports = {
  async rewrites() {
    return [
      {
        source: '/foretaget',
        destination: '/',
      },
      {
        source: '/nyheter',
        destination: '/',
      },
      {
        source: '/referenser',
        destination: '/',
      },
      {
        source: '/vara-losningar',
        destination: '/',
      },
      {
        source: '/varmehandboken',
        destination: '/',
      },
      {
        source: '/jobba-med-oss',
        destination: '/',
      },
      {
        source: '/kontakt',
        destination: '/',
      },
    ]
  },
}
