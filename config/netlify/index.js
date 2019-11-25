import CMS from "netlify-cms-app";

function Wrapper({ widgetFor }) {
  return widgetFor("body");
}

CMS.registerPreviewStyle("/admin/styles.css");
CMS.registerPreviewTemplate("blog", Wrapper);
