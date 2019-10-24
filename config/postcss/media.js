const screens = {
  desktop: 1170,
  tablet: 768,
  phone: 376
};

module.exports = {
  customMedia: {
    "--sm-scr": `(max-width: ${screens.phone}px)`,
    "--md-scr": `(max-width: ${screens.tablet - 1}px)`,
    "--lg-scr": `(min-width: ${screens.desktop}px)`
  }
};
