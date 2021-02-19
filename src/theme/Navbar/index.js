import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import useThemeContext from "@theme/hooks/useThemeContext";
import Nav from "../../components/global/Nav";
import styles from "./styles.module.scss";

function NavBar(props) {
  const { mainNav, ...otherProps } = useThemeConfig();
  const { isDarkTheme } = useThemeContext();
  const { items } = mainNav;

  return (
    <>
      <div className={styles.navWrapper}>
        <Nav routes={items} isDarkTheme={isDarkTheme} />
      </div>
      <OriginalNavBar {...props} />
    </>
  );
}

export default NavBar;
