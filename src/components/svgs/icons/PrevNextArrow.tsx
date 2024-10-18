import React from "react";
import PropTypes from "prop-types";
import { SvgProps } from "../types";

type Props = SvgProps & {
  rotate: number;
}

const PrevNextArrow = ({ size, rotate, ...otherProps }: Props) => {
  const props = {
    viewBox: "0 0 25 16",
    width: size || 25,
    height: size || 16,
    ...otherProps
  };

  const style = rotate ? {
    transform: `rotate(${rotate}deg)`
  } : {}

  return (
    <svg style={style} {...props}>
      <title>Directional arrow</title>
      <path d="M17.7 15.7l-1.5-1.4L20.8 9H1V7h19.8l-4.6-5.3L17.7.3 24.3 8z" />
    </svg>
  );
};

PrevNextArrow.displayName = "SVGS.Icon.PrevNextArrow";

export default PrevNextArrow;
