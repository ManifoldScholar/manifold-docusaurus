import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Logo from "../svgs/Logo";

const HomeLink = ({ className }) => {
  return (
    <a className={className} href="./">
      <Logo size={38} className={`${className}__logo`} />
      <span>Manifold</span>
    </a>
  );
};

HomeLink.displayName = "Global.HomeLink";

HomeLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

const StyledHomeLink = styled(HomeLink)`
  margin-right: auto;
  display: flex;
  align-items: center;
  transition: color ease 0.2s;
  font-weight: var(--font-weight-semi-bold);
  font-size: 1.125rem;

  &__logo {
    margin-right: 16px;
    transition: color ease 0.2s;
    width: 38px;
    height: 38px;

    ${({ color }) =>
      css`
        color: var(${`--${color || "green"}`});
      `}
  }

  &:hover,
  &:hover &__logo {
    text-decoration: none;

    ${({ hoverColor }) =>
      css`
        color: var(${`--${hoverColor || "text-color"}`});
      `}
  }
`;

export default StyledHomeLink;
