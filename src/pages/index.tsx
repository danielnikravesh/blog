import { graphql } from 'gatsby';
import { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';
import Feed from '../components/feed'; // tslint:disable-line: ordered-imports
import SEO from '../components/seo';

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
        big: FluidObject;
        small: FluidObject;
      };
    };
    author: {
      childMdx: {
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
    posts: {
      edges: [
        {
          node: IFeedPostData;
        }
      ];
    };
  };
  location: Location;
}

function BlogIndex({ data }: IBlogIndexProps) {
  return (
    <Layout index={true}>
      <SEO title="Blog" defaultMetaTitle={true} />
      <Feed posts={data.posts.edges} />
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
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            descriptionLong
            picture {
              childImageSharp {
                big: fluid(
                  maxWidth: 650
                  maxHeight: 450
                  cropFocus: CENTER
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                small: fluid(
                  maxWidth: 300
                  maxHeight: 250
                  cropFocus: CENTER
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            author {
              childMdx {
                frontmatter {
                  name
                  avatar {
                    childImageSharp {
                      fixed(width: 30, height: 30) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
