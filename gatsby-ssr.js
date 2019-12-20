const React = require("react")

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  replaceHeadComponents([
    headComponents,
    <React.Fragment key="head-components">
      <script
        async
        src="//embed.redditmedia.com/widgets/platform.js"
        charSet="UTF-8"
      ></script>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </React.Fragment>
  ])
}
