module.exports = {
  siteMetadata: {
    title: "BMDP Landing",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ee8solvh",
        dataset: "production",
        token: process.env.SANITY_TOKEN
      }
    }
  ],
};
