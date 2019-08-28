import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

type MetaProps = JSX.IntrinsicElements["meta"];

interface ISEOProps {
  description?: string;
  lang?: string;
  meta: MetaProps[];
  title: string;
}

function SEO({ description, lang, meta, title }: ISEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const defaultMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[...defaultMeta, ...meta]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

export default SEO;
