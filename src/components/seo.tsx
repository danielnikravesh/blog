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
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const defaultMeta: MetaProps[] = [
    {
      property: "description",
      content: metaDescription
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:description",
      content: metaDescription
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:image",
      content: "/social-share.png"
    },
    {
      name: "twitter:card",
      content: `summary`
    },
    {
      name: "twitter:title",
      content: title
    },
    {
      name: "twitter:description",
      content: metaDescription
    },
    {
      name: "twitter:image",
      content: "/social-share.png"
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
      link={[
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "shortcut icon",
          type: "image/vnd.microsoft.icon",
          href: "/favicon.ico"
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32"
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16"
        }
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

export default SEO;
