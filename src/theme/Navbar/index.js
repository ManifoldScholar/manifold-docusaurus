import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import useThemeContext from "@theme/hooks/useThemeContext";
import Nav from "../../components/global/Nav";
import GoogleAnalytics from "../../components/global/GoogleAnalytics";
import HtmlHead from "../HtmlHead";
import styles from "./styles.module.scss";

function NavBar(props) {
  const { mainNav, ...otherProps } = useThemeConfig();
  const { isDarkTheme } = useThemeContext();
  const { links } = mainNav;

  // NavBar is in beta, so we wrap it instead of overwriting it
  return (
    <>
      <HtmlHead />
      <GoogleAnalytics />
      <Nav
        wrapperClassName={styles.navWrapper}
        routes={links}
        isDarkTheme={isDarkTheme}
      />
      <OriginalNavBar {...props} />
    </>
  );
}

export default NavBar;
