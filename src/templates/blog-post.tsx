import { FixedObject, FluidObject } from "gatsby-image";

import { graphql } from "gatsby";
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
  tags?: string[];
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
    markdownRemark: IBlogPostData;
  };
  pageContext: {
    next: IBlogPostData;
    previous: IBlogPostData;
  };
}

function BlogPostTemplate({ data }: IBlogPostTemplateProps) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.picture &&
          post.frontmatter.picture.childImageSharp.fluid.src
        }
      />
      <Post {...post} />
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(format: HTML)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        descriptionLong
        tags
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
