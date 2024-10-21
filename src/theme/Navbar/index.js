import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import Nav from "../../components/global/Nav";
import HtmlHead from "../HtmlHead";
import styles from "./Navbar.module.css";

function NavBar(props) {
  const { mainNav, ...otherProps } = useThemeConfig();
  const { links } = mainNav;

  // NavBar is in beta, so we wrap it instead of overwriting it
  return (
    <>
      <HtmlHead />
      <Nav
        wrapperClassName={styles.navWrapper}
        routes={links}
      />
      <OriginalNavBar {...props} />
    </>
  );
}

export default NavBar;
