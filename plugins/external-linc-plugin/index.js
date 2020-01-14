const visit = require('unist-util-visit');

const re = /((\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?)/g;

function stripquotes(a) {
  if (
    a.charAt(0) === '"' ||
    (a.charAt(0) === "'" && a.charAt(a.length - 1) === '"') ||
    a.charAt(a.length - 1) === "'"
  ) {
    return a.substr(1, a.length - 2);
  }
  return a;
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    if (node.value.includes('<external-link')) {
      const found = node.value.match(re);
      const attrs = found.reduce((res, item) => {
        const objectParse = item.split('=');
        return {
          ...res,
          [objectParse[0]]: stripquotes(objectParse[1])
        };
      }, {});

      node.type = 'html';
      node.value = `
        <div>
          <a href=${attrs.href} class="external-link-preview">
            <section class="elp-content-holder">
              <div class="elp-description-holder">
                <h4 class="elp-title">${attrs.title}</h4>
                <div class="elp-description">${attrs.description}</div>
                <div class="elp-link">${attrs.link}</div>
              </div>
              <div class="elp-image-holder">
                <img src="${attrs.image}"/>
              </div>
            </section>
          </a>
        </div>
    `;
    }
  });
};
