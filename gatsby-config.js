module.exports = {
  siteMetadata: {
    title: 'Dean Dowd, UX Designer, Portland, Oregon',
    description: 'Up and coming user experience designer based in Portland, Oregon',
    keywords: 'Dean Dowd, UX Designer, User experience designer, Portland, Oregon'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xsg0d9to8jhm',
        accessToken: 'iaYbpBrAftwVBy8pFxsnSikvWrJivHzt5c7xj45H5jM'
      }
    }
  ],
}
