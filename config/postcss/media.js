const screens = {
  desktop: 1170,
  phone: 376
};

module.exports = {
  customMedia: {
    "--sm-scr": `(max-width: ${screens.phone}px)`,
    "--md-scr": `(max-width: ${screens.desktop - 1}px)`,
    "--lg-scr": `(min-width: ${screens.desktop}px)`
  }
};
