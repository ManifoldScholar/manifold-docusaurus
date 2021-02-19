import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
// import { useRouter } from "next/router";
import { Button } from "../../primitives";
import { Link } from "../../typography";
import { respond, fluidScale } from "../../styles/mixins";

const NavList = ({ className, isMobile, routes }) => {
  // const router = useRouter();
  // const path = router.asPath;

  return (
    <ul className={className}>
      {routes.map(({ href, label, isButton, isSelected }, i) => (
        <li key={i} className={`${className}__item`}>
          {isButton ? (
            <Button as="a" href={href}>
              Getting Started
            </Button>
          ) : (
            <Link href={href} data-selected={isSelected} size="xs">
              {label}
            </Link>
          )}
        </li>
      ))}
      <li className={`${className}__item`}>v 5.0.0</li>
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
