import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";

export default ({ children, path, ...attributes }) => {

  const adjustedPath = `${process.env.MARKETING_SITE_URL}${path}`;

  const adjustedAttributes = Object.assign({}, attributes, { href: adjustedPath })

  return (
    <a {...adjustedAttributes}>{children}</a>
  )

}
