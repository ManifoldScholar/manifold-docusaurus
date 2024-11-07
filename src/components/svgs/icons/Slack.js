import React from "react";
import svgShape from "../../shapes/svgShape";

const Slack = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 33 32",
    width: size || 33,
    height: size || 32,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Slack logo</title>
      <path
        d="M20.9 24.1c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-2.9h3.1zm-7.8-7.4c1.7 0 3.1 1.3 3.1 2.9V27c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-7.4c-.1-1.5 1.3-2.9 3.1-2.9zm-4.7 0v2.9c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h3.1zm20.4 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-7.9c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zM13.1 9.4c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9H5.2c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zm15.7 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-3.1v-2.9c-.1-1.6 1.4-2.9 3.1-2.9zM20.9 2C22.6 2 24 3.3 24 4.9v7.4c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9V4.9c0-1.6 1.4-2.9 3.1-2.9zm-7.8 0c1.7 0 3.1 1.3 3.1 2.9v2.9h-3.1c-1.7 0-3.1-1.3-3.1-2.9C9.9 3.3 11.3 2 13.1 2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Slack.displayName = "SVGS.Icon.Slack";

Slack.propTypes = {
  ...svgShape
};

export default Slack;
