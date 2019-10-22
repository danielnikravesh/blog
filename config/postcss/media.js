const screens = {
  large: 1000
};

module.exports = {
  customMedia: {
    "--sm-scr": `(max-width: ${screens.large - 1}px)`,
    "--lg-scr": `(min-width: ${screens.large}px)`
  }
};
