import { css } from "styled-components";

// Typography mixins
// --------------------
// These should be limited to typography-related properties only.

const tMonoface = css`
  font-family: "MaisonMono", SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export { tMonoface };
