import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { fluidScale, reducedMotion } from "../../../styles/mixins";
import HomeLink from "../HomeLink";
import NavList from "./NavList";
import NavMenuButton from "./NavMenuButton";

const Nav = ({ className, wrapperClassName, routes, isDarkTheme }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const method = showMobileNav ? "add" : "remove";
    document.body.classList[method]("has-scroll-lock");
  }, [showMobileNav]);

  return (
    <nav
      className={`${className} ${wrapperClassName} ${
        isDarkTheme ? "a-bg-neutral92" : "a-bg-neutral10"
      }`}
    >
      <div className={`${className}__inner`}>
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
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  routes: PropTypes.array,
  isDarkTheme: PropTypes.bool
};

const StyledNav = styled(Nav)`
  padding: var(--main-nav-padding-x) var(--main-nav-padding-y);

  &__inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: var(--main-nav-width);
    margin: 0 auto;
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color);
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
