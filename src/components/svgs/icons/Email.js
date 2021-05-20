import React from "react";
import svgShape from "../../shapes/svgShape";

const Email = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 33 32",
    width: size || 33,
    height: size || 32,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Envelope</title>
      <path d="M30.5 7h-27L17 18.2 30.5 7zM17 20.6L3.1 9.1V25h27.8V9.1L17 20.6z" />
    </svg>
  );
};

Email.displayName = "SVGS.Icon.Email";

Email.propTypes = {
  ...svgShape
};

export default Email;
