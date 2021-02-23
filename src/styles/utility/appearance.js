import { css } from "styled-components";
import { aBgColor, aHidden } from "../mixins/appearance";

// Appearance
// --------------------

// Appearance classes contain primarily texture parameters: background-color, transparency, borders, etc.
// Appearance classes can define a CSS variable for all children, such as --secondary-color
// These should be limited to appearance-related properties only.

const colors = [
  "white",
  "neutral10",
  "neutral05",
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

export default css`
  ${colors.map(
    color => css`
      .a-bg-${color} {
        ${aBgColor(color)}
      }
    `
  )}

  [class*="a-bg-"] {
    background-color: var(--background-color);
  }

  .a-color-secondary {
    color: var(--color-secondary);
  }

  .a-hidden {
    ${aHidden()}
  }
`;
