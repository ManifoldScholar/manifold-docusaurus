import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import Nav from "../../components/global/Nav";
import styles from "./styles.module.scss";

function NavBar(props) {
  const { mainNav } = useThemeConfig();
  const { items } = mainNav;

  return (
    <>
      <div className={styles.navWrapper}>
        <Nav routes={items} />
      </div>
      <OriginalNavBar {...props} />
    </>
  );
}

export default NavBar;
