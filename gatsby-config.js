const path = require("path");

module.exports = {
  siteMetadata: {
    title: "DVC",
    description:
      "Every month we are sharing here our news, findings, interesting reads, community takeaways, and everything along the way.",
    siteUrl: "https://blog.dvc.org"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "content", "blog"),
        name: "blog"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "content", "authors"),
        name: "authors"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "content", "assets"),
        name: "assets"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "static", "uploads"),
        name: "images"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700
            }
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        ref: true
      }
    },
    "gatsby-plugin-tslint",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      }
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "dvc.org",
        short_name: "dvc.org",
        start_url: "/",
        background_color: "#eff4f8",
        theme_color: "#eff4f8",
        display: "minimal-ui",
        icon: "static/512.png"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms"
  ]
};
