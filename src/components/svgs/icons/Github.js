import React from "react";
import svgShape from "../../shapes/svgShape";

const Github = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 33 32",
    width: size || 33,
    height: size || 32,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Github logo</title>
      <path d="M17 2C9.7 2 3.4 7 2.3 13.8s3.1 13.4 10 15.5c.7.1 1-.3 1-.7v-2.4c-4.2.8-5-1.9-5-1.9-.3-.8-.9-1.6-1.7-2-1.4-.9.1-.9.1-.9 1 .1 1.8.7 2.3 1.4.4.7 1.1 1.2 1.9 1.4.8.2 1.7.1 2.4-.3.1-.7.4-1.4.9-1.9-3.3-.4-6.8-1.6-6.8-6.9 0-1.4.5-2.7 1.5-3.8-.3-1-.3-2.3.3-3.5 0 0 1.3-.4 4.1 1.4 2.4-.6 5-.6 7.5 0 2.9-1.8 4.1-1.4 4.1-1.4.6 1.2.6 2.5.1 3.7 1 1 1.6 2.4 1.5 3.8 0 5.4-3.5 6.6-6.8 6.9.7.7 1.1 1.6 1 2.6v3.8c0 .4.3.8 1 .7 6.9-2.2 11.2-8.8 10-15.5S24.3 2 17 2" />
    </svg>
  );
};

Github.displayName = "SVGS.Icon.Github";

Github.propTypes = {
  ...svgShape
};

export default Github;
