import React, { useState, useEffect } from "react";
import HomeLink from "../HomeLink";
import NavList from "./NavList";
import NavMenuButton from "./NavMenuButton";
import styles from "./Nav.module.css";
import clsx from "clsx";

type Props = {
  wrapperClassName?: string;
  routes?: any[];
};

const Nav = ({ wrapperClassName, routes }: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const method = showMobileNav ? "add" : "remove";
    document.body.classList[method]("has-scroll-lock");
  }, [showMobileNav]);

  return (
    <nav
      className={clsx(styles.nav, wrapperClassName)}
    >
      <div className={styles.nav__inner}>
        <HomeLink />
        <NavList routes={routes} />
        <NavMenuButton
          type="open"
          onClick={() => setShowMobileNav(true)}
          aria-controls="mobileMenu"
          aria-pressed={showMobileNav}
        />
        <div
          className={styles["nav__mobile-menu"]}
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

export default Nav;
