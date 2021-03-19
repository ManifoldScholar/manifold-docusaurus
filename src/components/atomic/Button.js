import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { aFocus, reducedMotion } from "../../styles/mixins";
import Nav from "../global/Nav";

const Button = styled.button`
  color: var(--header-color);
  border: 2px solid var(--button-hover-color);
  background-color: var(--button-background);
  padding: 9px 20px 11px;
  display: inline-block;
  text-align: center;
  position: relative;
  transition: color ease-in 0.2s, background-color ease 0.2s,
    border-color ease-in 0.2s, transform ease-in 0.2s;
  cursor: pointer;
  font-size: var(--font-size-xs);
  line-height: 1.187;
  ${aFocus()}

  ${({ block }) =>
    block &&
    css`
      display: inline-block;
      min-width: 200px;

      ${respond(
        css`
          min-width: 100%;
        `,
        30
      )}
    `}

  /* stylelint-disable */
  ${Nav} & {
    padding: 7px 16px 8px;
  }
  /* stylelint-enable */

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    left: 6px;
    bottom: -8px;
    right: -8px;
    border-right: 2px solid var(--button-hover-color);
    border-bottom: 2px solid var(--button-hover-color);
    transition: border-color ease-in 0.2s, transform ease-in 0.2s;
  }

  &:disabled {
    --button-hover-color: var(--neutral50);
    color: var(--neutral50);
    cursor: default;
  }

  &:hover:not(:disabled),
  &[aria-selected="true"]:not(:disabled),
  &[data-selected="true"]:not(:disabled) {
    color: var(--background-color);
    background-color: var(--button-hover-color);
    transform: translate(2px, 2px);

    ${reducedMotion(`transform: none;`)}

    &::after {
      transform: translate(-2px, -2px);

      ${reducedMotion(`transform: none;`)}
    }
  }
`;

Button.propTypes = {
  block: PropTypes.bool
};

Button.displayName = "Atomic.Button";

export default Button;
