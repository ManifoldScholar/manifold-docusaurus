import { css } from "styled-components";

// Appearance mixins
// --------------------
// These should be limited to appearance-related properties only.

const breakpoints = {
  130: "1280px",
  120: "1200px",
  100: "1024px",
  80: "768px",
  60: "600px",
  50: "516px",
  30: "300px",
};

// Media queries
// --------------------------------------------------------
// Respond to viewport size
// $size -> viewport size
// $operator -> 'min' or 'max'
// $aspect -> 'width' or 'height'
export function respond(content, size, operator = "max", aspect = "width") {
  const pxSize = breakpoints[size] || size;

  return css`
    @media all and (${operator}-${aspect}: ${pxSize}) {
      ${content}
    }
  `;
}

// Respond to users with reduced motion turned on
export function reducedMotion(content) {
  return css`
    /* stylelint-disable scss/media-feature-value-dollar-variable */
    @media (prefers-reduced-motion: reduce) {
      ${content}
    }
  `;
}

// Fluid Elements
// --------------------------------------------------------
// Set min and max sizes and breakpoints and let SCSS fluidly scale different properties in-between

export function fluidScale(max, min, maxBreak, minBreak) {
  const maxNum = stripUnit(max);
  const minNum = stripUnit(min);

  if (minNum > maxNum) {
    return css`clamp(${max}, ${fluidScaleCalc(
      max,
      min,
      maxBreak,
      minBreak
    )}, ${min})`;
  }

  return css`clamp(${min}, ${fluidScaleCalc(
    max,
    min,
    maxBreak,
    minBreak
  )}, ${max})`;
}

// return fluid-scale calc value
export function fluidScaleCalc(
  maxValue,
  minValue,
  maxBreak = 130,
  minBreak = 50
) {
  const maxVw = breakpoints[maxBreak];
  const minVw = breakpoints[minBreak];

  return css`
    calc(
      ${minValue} + ${stripUnit(maxValue) - stripUnit(minValue)} *
      (100vw - ${minVw}) / ${stripUnit(maxVw) - stripUnit(minVw)}
    )
  `;
}

// used by fluid-scale mixin
function stripUnit(unit) {
  return parseInt(unit.toString().replace(/\D/g, ""));
}
