const path = require("path");
const {
  fluidScaleRem: fluidScaleRemBase,
  fluidScalePx: fluidScalePxBase,
  pxToRem: pxToRemBase,
  aBgColor: aBgColorBase,
  respond: respondBase,
  screens
} = require("./src/styles/helpers.cjs");

module.exports = {
  plugins: {
    "postcss-mixins": {
      mixinsDir: path.join(__dirname, "./src/styles/mixins"),
      mixins: {
        fluidScaleRem: function (
          mixin,
          property,
          max,
          min,
          maxBreak,
          minBreak,
        ) {
          const scale = fluidScaleRemBase(max, min, maxBreak, minBreak);
          return { [property]: scale };
        },
        fluidScalePx: function (mixin, property, max, min, maxBreak, minBreak) {
          const scale = fluidScalePxBase(max, min, maxBreak, minBreak);
          return { [property]: scale };
        },
        pxToRem: function (mixin, property, pxValue) {
          const value = pxToRemBase(pxValue);
          return { [property]: value };
        },
        aBgColor: function(mixin, color) {
          return aBgColorBase(color);
        },
        embedFont: function(mixin, name, filename, style = "normal", weight = 400) {
          return {
            "@font-face": `{
              font-family: ${name};
              font-style: ${style};
              font-weight: ${weight};
              font-display: swap;
              src: url("/fonts/${filename}.woff2") format("woff2");
            }`
          }
        },
        respond: function(mixin, size, operator, aspect) {
          return respondBase(size, operator, aspect);
        }
      },
    },
    "postcss-import": {},
    "postcss-nested": {}
  },
};
