import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { aBackgroundUnderline, reducedMotion } from "../../styles/mixins";

const UnderlinedLink = styled.a`
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

UnderlinedLink.displayName = "Typography.UnderlinedLink";

UnderlinedLink.propTypes = {
  size: PropTypes.string
};

export default UnderlinedLink;
