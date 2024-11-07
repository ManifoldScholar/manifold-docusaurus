import { css } from "styled-components";

// Appearance mixins
// --------------------
// These should be limited to appearance-related properties only.

function aBgLight(color) {
  return css`
    --background-color: ${color === "transparent"
      ? "transparent"
      : `var(--${color})`};
    --color-secondary: var(--green50);
    --header-color: var(--header-dark);
    --text-color: var(--text-dark);
    --button-background: var(--white);
    --button-hover-color: var(--dark-gray);
    --input-background: var(--white);
    --placeholder-color: var(--text-color);
    background-color: var(--background-color);
  `;
}

function aBgDark(color) {
  return css`
    --color-secondary: var(--green50);
    --background-color: var(${`--${color}`});
    --header-color: var(--header-light);
    --text-color: var(--text-light);
    --button-background: var(--dark-gray);
    --button-hover-color: var(--green50);
    --border-color: var(--text-light);
    --input-background: "transparent";
    --placeholder-color: var(--header-color);
    background-color: var(--background-color);
  `;
}

function aBgColored(color) {
  return css`
    --color-secondary: var(--green50);
    --background-color: var(${`--${color}`});
    --header-color: var(--header-dark);
    --text-color: var(--header-dark);
    --button-background: var(--white);
    --button-hover-color: var(--dark-gray);
    --input-background: var(--white);
    --placeholder-color: var(--text-color);
    background-color: var(--background-color);
  `;
}

export function aBgColor(color) {
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

export function aHidden() {
  return css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  `;
}

export function aFocus(color) {
  return css`
    &:focus {
      outline: 0;
    }

    &:focus-visible {
      outline: 2px solid ${({ color }) =>
        color ? `var(${color})` : "var(--color-secondary"});
    }
  `;
}

export function aBackgroundUnderline(color = "text-color", forwards = true) {
  return css`
    border-bottom: 2px solid var(${`--${color}`});

    @supports (background-image: linear-gradient(#fff, #fff)) {
      background-image: linear-gradient(
        var(${`--${color}`}),
        var(${`--${color}`})
      );
      background-repeat: no-repeat;
      background-position: center bottom;
      border-bottom: none;
      background-size: 0 2px;
    }
  `;
}
