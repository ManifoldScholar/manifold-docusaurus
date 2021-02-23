import { createGlobalStyle } from "styled-components";
import baseRoot from "./base/root";
import utilityAppearance from "./utility/appearance";
import utilityLayout from "./utility/layout";
import utilityState from "./utility/state";

// Define global styles
const GlobalStyles = createGlobalStyle`
  ${baseRoot}

  ${utilityAppearance}
  ${utilityLayout}
  ${utilityState}
`;

export default GlobalStyles;
