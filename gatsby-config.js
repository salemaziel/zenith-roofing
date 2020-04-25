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
        tawkId: "5ea0b46f69e9320caac662db",
        //widgetId: "5ea0b46f69e9320caac662db" 
        // get this from the tawk script widget
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-164476957-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        ///head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        ///exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        ///pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        ///optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        ///experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        ///variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        ///sampleRate: 5,
        ///siteSpeedSampleRate: 10,
        cookieDomain: "zenithroofingservices.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenith Roofing`,
        short_name: `Zenith Roofers`,
        description: `Roofing Services for San Diego`,
        lang: `en`,
        start_url: `/`,
        background_color: `#0d4879`,
        theme_color: `#ff9900`,
        display: `standalone`,
        icon: `src/images/logo-vert-square-x512.png`, // This path is relative to the root of the site.
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
