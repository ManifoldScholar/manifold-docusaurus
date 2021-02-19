import styled, { css } from "styled-components";
import { aBackgroundUnderline, reducedMotion } from "../styles/mixins";

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  line-height: 2rem;
  transition: background 0.2s ease-in;
  ${aBackgroundUnderline()}

  ${reducedMotion(css`
    transition: none;
  `)}

  &:hover,
  &[data-selected="true"] {
    background-size: 100% 2px;
  }

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size- ${size});
    `};

  > * + * {
    margin-left: 10px;
  }
`;

Link.displayName = "Typography.Link";

Link.propTypes = {};

export default Link;
