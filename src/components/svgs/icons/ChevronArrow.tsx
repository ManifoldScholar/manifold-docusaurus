import React from "react";
import PropTypes from "prop-types";
import { SvgProps } from "../types";

type Props = SvgProps & {
  rotate: number;
}

const ChevronArrow = ({ size, rotate, ...otherProps }: Props) => {
  const props = {
    viewBox: "0 0 16 18",
    width: size || 16,
    height: size || 18,
    ...otherProps
  };

  const style = rotate ? {
    transform: `rotate(${rotate}deg)`
  } : {};

  return (
    <svg style={style} {...props}>
      <title>Arrow</title>
      <path d="M14.3 12.1L8 6.6l-6.3 5.5-1.4-1.6L8 3.9l7.7 6.6z" />
    </svg>
  );
};

ChevronArrow.displayName = "SVGS.Icon.ChevronArrow";

export default ChevronArrow;
