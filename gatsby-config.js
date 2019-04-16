module.exports = {
  siteMetadata: {
    title: `Gatsby Flip-toolkit page transitions`,
    description: `Page transitions with flip toolkit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
