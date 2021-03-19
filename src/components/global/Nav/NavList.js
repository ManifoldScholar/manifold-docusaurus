import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { default as DocLink } from "@docusaurus/Link";
import { Button } from "../../atomic";
import { Link, Text } from "../../typography";
import { respond, fluidScale } from "../../../styles/mixins";

const NavList = ({ className, isMobile, routes }) => {
  return (
    <ul className={className}>
      {routes.map(({ label, isButton, isSelected, ...linkProps }, i) => (
        <li key={i} className={`${className}__item`}>
          {isButton ? (
            <Button as="a" {...linkProps}>
              Get Started
            </Button>
          ) : (
            <Link
              as={DocLink}
              data-selected={isSelected}
              size="nav"
              {...linkProps}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
      <li className={`${className}__item`}>
        <Text size="nav">v 5.0.0</Text>
      </li>
    </ul>
  );
};

NavList.displayName = "Global.Nav.List";

NavList.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool
};

const StyledNavList = styled(NavList)`
  --menu-spacing: ${fluidScale("32px", "18px")};
  display: flex;
  align-items: center;

  ${({ isMobile }) =>
    isMobile
      ? css`
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        `
      : respond(
          css`
            display: none;
          `,
          80
        )}

  &__item {
    ${({ isMobile }) =>
      isMobile
        ? css`
            margin-bottom: 26px;
          `
        : css`
            margin-left: var(--menu-spacing);
          `}
  }
`;

export default StyledNavList;
