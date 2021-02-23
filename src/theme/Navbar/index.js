import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import useThemeContext from "@theme/hooks/useThemeContext";
import Nav from "../../components/global/Nav";
import styles from "./styles.module.scss";

function NavBar(props) {
  const { mainNav, ...otherProps } = useThemeConfig();
  const { isDarkTheme } = useThemeContext();
  const { links } = mainNav;

  return (
    <>
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
