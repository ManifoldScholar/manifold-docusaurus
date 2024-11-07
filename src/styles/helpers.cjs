const {
  pxToRem: pxToRemBase,
  fluidScalePxBase,
  fluidScaleRemBase,
} = require("@castiron/style-mixins");

const pxPerRem = 16;

function pxToRem(pxValue) {
  return pxValue.includes("-")
    ? `-${pxToRemBase(pxValue, pxPerRem)}`
    : pxToRemBase(pxValue, pxPerRem);
}

const colors = [
  "white",
  "neutral10",
  "neutral05",
  "neutral92",
  "dark-gray",
  "black",
  "blue",
  "green",
  "orange",
  "purple",
  "salmon",
  "teal",
  "yellow",
  "light-blue",
  "light-green",
  "light-orange",
  "light-purple",
  "light-salmon",
  "light-teal",
  "light-yellow",
  "blue50",
  "green50",
  "orange50",
  "purple50",
  "salmon50",
  "teal50",
  "yellow50"
];

function aBgDark(color) {
  return {
    "--color-secondary": "var(--green50)",
    "--background-color": `var(--${color})`,
    "--header-color": "var(--header-light)",
    "--text-color": "var(--text-light)",
    "--button-background": "var(--dark-gray)",
    "--button-hover-color": "var(--green50)",
    "--border-color": "var(--text-light)",
    "--input-background": "transparent",
    "--placeholder-color": "var(--header-color)",
    "background-color": "var(--background-color)",
  };
}

function aBgLight(color) {
  return {
    "--background-color": `var(--${color})`,
    "--color-secondary": "var(--green50)",
    "--header-color": "var(--header-dark)",
    "--text-color": "var(--text-dark)",
    "--button-background": "var(--white)",
    "--button-hover-color": "var(--dark-gray)",
    "--input-background": "var(--white)",
    "--placeholder-color": "var(--text-color)",
    "background-color": "var(--background-color)",
  };
}

function aBgColored(color) {
  return {
    "--color-secondary": "var(--green50)",
    "--background-color": `var(--${color})`,
    "--header-color": "var(--header-dark)",
    "--text-color": "var(--header-dark)",
    "--button-background": "var(--white)",
    "--button-hover-color": "var(--dark-gray)",
    "--input-background": "var(--white)",
    "--placeholder-color": "var(--text-color)",
    "background-color": "var(--background-color)",
  };
}

function aBgColor(color) {
  switch (color) {
    case "black":
      return aBgDark("black");
    case "dark-gray":
      return aBgDark("dark-gray");
    case "neutral92":
      return aBgDark("neutral92");
    case "neutral10":
      return aBgColored("neutral10");
    case "neutral05":
      return aBgColored("neutral05");
    case "white":
      return aBgLight("white");
    case "transparent":
      return aBgLight("transparent");
    default:
      return aBgColored(color);
  }
}

const screens = {
  "130": "1280px",
  "120": "1200px",
  "100": "1024px",
  "80": "768px",
  "60": "600px",
  "50": "516px",
  "30": "300px",
};

function fluidScalePx(max, min, maxVw = screens["130"], minVw = screens["30"]) {
  if (max === min) return `${max}`;
  return fluidScalePxBase(max, min, maxVw, minVw);
}

// adapted from https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
function fluidScaleRem(
  maxPx,
  minPx,
  maxVwRem = screens.max,
  minVwRem = screens.sm,
) {
  return fluidScaleRemBase(maxPx, minPx, maxVwRem, minVwRem, pxPerRem);
}

/* Media queries
--------------------------------------------------------
Respond to viewport size
$size -> viewport size
$operator -> 'min' or 'max'
$aspect -> 'width' or 'height' */
function respond(size, operator = "max", aspect = "width") {
  const width = screens[`${size}`];

  return {
    [`@media (${operator}-${aspect}: ${width})`]: {
        '@mixin-content': {},
    },
  };
}

module.exports = {
  pxPerRem,
  pxToRem,
  screens,
  colors,
  fluidScalePx,
  fluidScaleRem,
  aBgColor,
  respond
};
