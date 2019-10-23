import { graphql } from "gatsby";
import { FixedObject } from "gatsby-image";
import React from "react";

import Feed from "../components/feed";
import Layout from "../components/layout";
import SEO from "../components/seo";

export interface IFeedPostData {
  id: string;
  timeToRead: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    description: string;
    descriptionLong: string;
    picture?: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    author: {
      childMarkdownRemark: {
        frontmatter: {
          name: string;
          avatar: {
            childImageSharp: {
              fixed: FixedObject;
            };
          };
        };
      };
    };
  };
}

interface IBlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    mainPost: {
      edges: [
        {
          node: IFeedPostData;
        }
      ];
    };
    restPosts: {
      edges: [
        {
          node: IFeedPostData;
        }
      ];
    };
  };
  location: Location;
}

function BlogIndex({ data, location }: IBlogIndexProps) {
  const siteTitle = data.site.siteMetadata.title;
  const mainPost = data.mainPost.edges[0].node;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Feed mainPost={mainPost} posts={data.restPosts.edges} />
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mainPost: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          ...itemContent
          frontmatter {
            picture {
              childImageSharp {
                fixed(width: 650, height: 450) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    restPosts: allMarkdownRemark(
      skip: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          ...itemContent
          frontmatter {
            picture {
              childImageSharp {
                fixed(width: 300, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
  fragment itemContent on MarkdownRemark {
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      descriptionLong
      author {
        childMarkdownRemark {
          frontmatter {
            name
            avatar {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
