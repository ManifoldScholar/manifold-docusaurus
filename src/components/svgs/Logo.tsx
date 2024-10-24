import React from "react";
import { SvgProps } from "./types";

import defaultProps from "./defaultProps";

const Logo = ({ size, ...otherProps }: SvgProps) => {
  const props = {
    viewBox: "0 0 34 35",
    width: size || 38,
    height: size || 38,
    ...defaultProps,
    ...otherProps
  };

  return (
    <svg {...props}>
      <title>Manifold logo</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.6 11.2l-2.5.8-3.9-1.5 6.4-2V6.3l-9.5 3.1-3.9-1.5 13.4-4.3V1.4L17.1 6.7.4.2v13.9L16 9.2v2.7L.4 16.8V19L16 14.1v2.7L.4 21.7v2.2L16 19v2.7L.4 26.6v2.2L16 23.9v2.7L.4 31.5v2.2L17 28.5l16.6 6.4z"
      />
    </svg>
  );
};

Logo.displayName = "SVGs.Logo";

export default Logo;
