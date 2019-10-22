const nested = require("postcss-nested");
const autoprefixer = require("autoprefixer");
const customMedia = require("postcss-custom-media");
const mixins = require("postcss-mixins");

const mediaConfig = require("./config/postcss/media");
const mixinsConfig = require("./config/postcss/mixins");

module.exports = function postcssConfig() {
  return {
    plugins: [
      mixins(mixinsConfig),
      customMedia({ importFrom: mediaConfig }),
      nested,
      autoprefixer
    ]
  };
};
