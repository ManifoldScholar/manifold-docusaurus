import React from "react";
import svgShape from "../../shapes/svgShape";

const HamburgerMenu = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 22 18",
    width: size || 22,
    height: size || 18,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Menu icon</title>
      <path d="M22 15H0v-2h22v2zm0-10H0V3h22v2z" />
    </svg>
  );
};

HamburgerMenu.displayName = "SVGS.Icon.HamburgerMenu";

HamburgerMenu.propTypes = {
  ...svgShape
};

export default HamburgerMenu;
