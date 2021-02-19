import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fluidScale, reducedMotion } from "../../styles/mixins";
import HomeLink from "../HomeLink";
import NavList from "./NavList";
import NavMenuButton from "./NavMenuButton";

const Nav = ({ className, routes }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const method = showMobileNav ? "add" : "remove";
    document.body.classList[method]("has-scroll-lock");
  }, [showMobileNav]);

  return (
    <nav className={`${className} a-bg-neutral10`}>
      <div className={`${className}__inner l-container-max`}>
        <HomeLink />
        <NavList routes={routes} />
        <NavMenuButton
          type="open"
          onClick={() => setShowMobileNav(true)}
          aria-controls="mobileMenu"
          aria-pressed={showMobileNav}
        />
        <div
          className={`${className}__mobile-menu`}
          data-open={showMobileNav}
          role="region"
          id="mobileMenu"
          aria-live="polite"
        >
          <NavMenuButton
            type="close"
            onClick={() => setShowMobileNav(false)}
            aria-controls="mobileMenu"
            aria-hidden={!showMobileNav}
          />
          <NavList routes={routes} isMobile aria-hidden={!showMobileNav} />
        </div>
      </div>
    </nav>
  );
};

Nav.displayName = "Global.Nav";

Nav.propTypes = {
  className: PropTypes.string
};

const StyledNav = styled(Nav)`
  --menu-padding-x: ${fluidScale("28px", "18px")};
  --menu-padding-y: 28px;
  padding: var(--menu-padding-x) var(--menu-padding-y);

  &__inner {
    display: flex;
    align-items: center;
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--neutral10);
    transition: max-height 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    display: block;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    ${reducedMotion(css`
      transition: opacity 0.25s cubic-bezier(0.33, 1, 0.68, 1);
    `)}
    z-index: 1000;
  }

  &__mobile-menu[data-open="true"] {
    max-height: 100vh;
    padding: var(--menu-padding-x) var(--menu-padding-y);
    opacity: 1;
  }
`;

export default StyledNav;
