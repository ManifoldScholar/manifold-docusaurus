/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { default as GlobalFooter } from "../../components/global/Footer";
import styles from "./Footer.module.css";

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};

  if (!footer) {
    return null;
  }

  return <GlobalFooter wrapperClassName={styles.footerWrapper} links={links} />;
}

export default Footer;
