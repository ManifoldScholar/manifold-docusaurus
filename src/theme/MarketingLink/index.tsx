import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";


export default ({ children, path, ...attributes }) => {
  const { manifoldLogoLink } = useThemeConfig();
  
  const adjustedPath = `${manifoldLogoLink}${path}`;

  const adjustedAttributes = Object.assign({}, attributes, { href: adjustedPath })

  return (
    <a {...adjustedAttributes}>{children}</a>
  )

}
