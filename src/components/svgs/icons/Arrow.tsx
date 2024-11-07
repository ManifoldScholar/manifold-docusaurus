import React from "react";
import { SvgProps } from "../types";

type Props = SvgProps & {
  rotate: number;
}

const Arrow = ({ size, rotate, ...otherProps }: Props) => {
  const props = {
    viewBox: "0 0 19 20",
    width: size || 19,
    height: size || 20,
    ...otherProps
  };

  const style = rotate ? {
    transform: `rotate(${rotate}deg)`
  } : {};

  return (
    <svg style={style} {...props}>
      <title>Arrow</title>
      <path d="M9.7 19.7l-1.4-1.4 6.5-7.3H0V9h14.8L8.3 1.7 9.7.3l8.6 9.7z" />
    </svg>
  );
};

Arrow.displayName = "SVGS.Icon.Arrow";

export default Arrow;
