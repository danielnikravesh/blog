const screens = {
  desktop: 1200,
  tablet: 1000,
  mobile: 700
};

module.exports = {
  customMedia: {
    "--sm-scr": `(max-width: ${screens.mobile}px)`,
    "--md-scr": `(max-width: ${screens.tablet - 1}px)`,
    "--lg-scr": `(min-width: ${screens.tablet}px)`,
    "--xl-scr": `(min-width: ${screens.desktop}px)`
  }
};
