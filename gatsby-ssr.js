var React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <script
      async
      src="//embed.redditmedia.com/widgets/platform.js"
      charSet="UTF-8"
    />,
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    />
  ]);
};
