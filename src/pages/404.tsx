import React from "react";

import Page404 from "../components/404";
import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Page404 />
    </Layout>
  );
}

export default NotFoundPage;
