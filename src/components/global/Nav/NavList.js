import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { default as DocLink } from "@docusaurus/Link";
import { Button } from "../../atomic";
import { UnderlinedLink, Text } from "../../typography";
import { respond, fluidScale } from "../../../styles/mixins";

const NavList = ({ className, isMobile, routes }) => {
  return (
    <ul className={className}>
      {routes.map(({ label, isButton, isSelected, ...linkProps }, i) => (
        <li key={i} className={`${className}__item`}>
          {isButton ? (
            <Button as="a" {...linkProps} size="small">
              Get Started
            </Button>
          ) : (
            <UnderlinedLink
              as={DocLink}
              data-selected={isSelected}
              size="nav"
              {...linkProps}
            >
              {label}
            </UnderlinedLink>
          )}
        </li>
      ))}
      <li className={`${className}__item`}>
        <Text size="nav">v 7.0.1</Text>
      </li>
    </ul>
  );
};

NavList.displayName = "Global.Nav.List";

NavList.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
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
