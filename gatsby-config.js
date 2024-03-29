module.exports = {
  siteMetadata: {
    title: "BMDP Landing",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `none`,
          backgroundColor: `transparent`,
        }
      }
    },
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
        token: process.env.GATSBY_SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BMDP Landing Page`,
        icon: `src/images/icon_give.png`,
        lang: `en`,
        start_url: `/`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-9902HYWBJB`,
          `AW-935395305`
        ],
        pluginConfig: {
          head: true
        }
      },
    }
  ],
};
