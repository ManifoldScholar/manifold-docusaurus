import React from "react";
import svgShape from "../../shapes/svgShape";

const Twitter = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 33 32",
    width: size || 33,
    height: size || 32,
    ...otherProps,
  };

  return (
    <svg {...props}>
      <path d="M31.9 7.3c-1.1.5-2.3.8-3.5.9 1.3-.7 2.2-1.8 2.7-3.2-1.2.7-2.5 1.1-3.9 1.4-1.9-1.9-4.9-2.4-7.4-1.1s-3.7 3.8-3.1 6.4c-4.9-.2-9.5-2.4-12.6-6-1.6 2.6-.8 6 1.9 7.7-1 0-1.9-.3-2.8-.7v.1c0 2.7 2.1 5.1 4.9 5.6-.9.2-1.8.3-2.8.1.8 2.3 3.1 3.9 5.7 4-2 1.5-4.7 2.4-7.5 2.4-.5 0-1 0-1.5-.1 2.8 1.7 6.1 2.6 9.4 2.6 11.3 0 17.4-8.8 17.4-16.3v-.7c1.3-.9 2.3-1.9 3.1-3.1z" />
    </svg>
  );
};

Twitter.displayName = "SVGS.Icon.Twitter";

Twitter.propTypes = {
  ...svgShape,
};

export default Twitter;
