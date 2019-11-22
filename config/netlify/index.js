import CMS from "netlify-cms-app";
import React from "react";

function Wrapper({ widgetFor }) {
  return widgetFor("body");
}

CMS.registerPreviewStyle("/admin/styles.css");
CMS.registerPreviewTemplate("blog", Wrapper);
