import React from "react";
import OriginalNavBar from "@theme-original/Navbar";
import { useThemeConfig } from "@docusaurus/theme-common";
import Nav from "../../components/global/Nav";
import HtmlHead from "../HtmlHead";
import styles from "./Navbar.module.css";

function NavBar(props) {
  // mainNav has not been included in the official types yet.
  // See https://github.com/facebook/docusaurus/blob/9457833df041dd2bbc773988ed76fa874e7d0723/packages/docusaurus-theme-common/src/utils/useThemeConfig.ts#L103
  const { mainNav } = useThemeConfig() as any;
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
