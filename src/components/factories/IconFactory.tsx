import React from "react";
import * as Icons from "../svgs/icons";
import defaultProps from "../svgs/defaultProps";

const ICON_MAP = {
  arrow: Icons.Arrow,
  chevronArrow: Icons.ChevronArrow,
  prevNextArrow: Icons.PrevNextArrow,
  twitter: Icons.Twitter,
  email: Icons.Email,
  slack: Icons.Slack,
  github: Icons.Github,
  hamburgerMenu: Icons.HamburgerMenu,
  closeMenu: Icons.CloseMenu
};

export default function IconFactory({ icon, ...props }) {
  const Icon = ICON_MAP[icon];

  return Icon ? <Icon {...defaultProps} {...props} /> : null;
}