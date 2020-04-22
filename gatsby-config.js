'use strict';

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const siteConfig = require('./config.js');
module.exports = {
  siteMetadata: {
    ...siteConfig,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e77c1ad8d24fc2265895053",
        widgetId: "YOUR_WIDGET_ID" 
        // get this from the tawk script widget
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenith Roofing`,
        short_name: `Zenith`,
        start_url: `/`,
        background_color: `#0d4879`,
        theme_color: `#ff9900`,
        display: `minimal-ui`,
        icon: `src/images/logo-vertical-dark-500x410.png`, // This path is relative to the root of the site.
      },
    },
    /*{
      resolve: `gatsby-source-google-spreadsheet`,
      options:{
        spreadsheetId:process.env.SPREADSHEET_ID,
        credentials:{
          client_email:process.env.CLIENT_EMAIL,
          private_key:process.env.PRIVATE_KEY
        }
      }
    },*/
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
