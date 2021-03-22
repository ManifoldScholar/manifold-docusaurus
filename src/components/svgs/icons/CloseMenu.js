import React from "react";
import svgShape from "../../shapes/svgShape";

const CloseMenu = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 18 18",
    width: size || 18,
    height: size || 18,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>x</title>
      <path d="M17.4 2L16 .6l-7 7-7-7L.6 2l7 7-7 7L2 17.4l7-7 6.9 6.9 1.4-1.4L10.4 9z" />
    </svg>
  );
};

CloseMenu.displayName = "SVGS.Icon.CloseMenu";

CloseMenu.propTypes = {
  ...svgShape
};

export default CloseMenu;
