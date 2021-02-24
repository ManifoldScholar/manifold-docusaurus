import React from "react";
import svgShape from "../../shapes/svgShape";

const Arrow = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 19 20",
    width: size || 19,
    height: size || 20,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Open eye</title>
      <path d="M9.7 19.7l-1.4-1.4 6.5-7.3H0V9h14.8L8.3 1.7 9.7.3l8.6 9.7z" />
    </svg>
  );
};

Arrow.displayName = "SVGS.Icon.Arrow";

Arrow.propTypes = {
  ...svgShape
};

export default Arrow;
