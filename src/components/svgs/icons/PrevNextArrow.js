import React from "react";
import PropTypes from "prop-types";
import svgShape from "../../shapes/svgShape";
import styled, { css } from "styled-components";

const StyledPrevNextArrow = styled.svg`
  ${({ rotate }) =>
    rotate !== 0 &&
    css`
      transform: rotate(${rotate}deg);
    `}
`;

StyledPrevNextArrow.propTypes = {
  ...svgShape,
  rotate: PropTypes.number
};

const PrevNextArrow = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 25 16",
    width: size || 25,
    height: size || 16,
    ...otherProps
  };

  return (
    <StyledPrevNextArrow {...props}>
      <title>Directional arrow</title>
      <path d="M17.7 15.7l-1.5-1.4L20.8 9H1V7h19.8l-4.6-5.3L17.7.3 24.3 8z" />
    </StyledPrevNextArrow>
  );
};

PrevNextArrow.displayName = "SVGS.Icon.PrevNextArrow";

PrevNextArrow.propTypes = {
  ...svgShape
};

export default PrevNextArrow;
