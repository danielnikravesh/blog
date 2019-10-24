import { FixedObject, FluidObject } from "gatsby-image";

import { graphql, Link } from "gatsby";
import React from "react";

import { IBlogPostData } from "../templates/blog-post";

import Layout from "../components/layout";
import Post from "../components/post";
import SEO from "../components/seo";

export interface IBlogPostFrontmatter {
  title: string;
  date: string;
  description: string;
  descriptionLong?: string;
  picture?: {
    childImageSharp: {
      fluid: FluidObject;
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
}

export interface IBlogPostData {
  id: string;
  html: string;
  timeToRead: string;
  fields: {
    slug: string;
  };
  frontmatter: IBlogPostFrontmatter;
}

interface IBlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
      };
    };
    markdownRemark: IBlogPostData;
  };
  pageContext: {
    next: IBlogPostData;
    previous: IBlogPostData;
  };
  location: Location;
}

function BlogPostTemplate({ data, location }: IBlogPostTemplateProps) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Post {...post} />
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: HTML)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
        picture {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
