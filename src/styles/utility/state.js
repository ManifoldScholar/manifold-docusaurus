import { css } from "styled-components";

// State
// --------------------

// Utility classes for setting styles based on component state.
// Classes are prepended with `is-` or `has-`.

export default css`
  &.has-scroll-lock {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
`;
