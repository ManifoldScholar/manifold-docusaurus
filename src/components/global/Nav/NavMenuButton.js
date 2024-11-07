import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { respond } from "../../../styles/mixins";
import IconFactory from "../../factories/IconFactory";

const NavMenuButton = ({ type, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      <span className="a-hidden">{type} navigation</span>
      {type === "open" ? (
        <IconFactory icon="hamburgerMenu" />
      ) : (
        <IconFactory icon="closeMenu" />
      )}
    </button>
  );
};

NavMenuButton.displayName = "Global.Nav.MenuButton";

NavMenuButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["open", "close"])
};

const StyledNavMenuButton = styled(NavMenuButton)`
  width: 35px;
  height: 35px;
  /* resets for Docusaurus */
  border: none;
  background: transparent;
  color: inherit;

  ${({ type }) =>
    type === "open"
      ? css`
          display: none;
        `
      : css`
          position: absolute;
          top: var(--menu-padding-x);
          right: var(--menu-padding-y);
        `}

  ${respond(
    css`
      display: block;
      margin-left: auto;
    `,
    80
  )}
`;

export default StyledNavMenuButton;
