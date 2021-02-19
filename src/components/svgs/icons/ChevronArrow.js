import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import svgShape from "../../shapes/svgShape";

const StyledChevronArrow = styled.svg`
  ${({ rotate }) =>
    rotate !== 0 &&
    css`
      transform: rotate(${rotate}deg);
    `}
`;

const ChevronArrow = ({ size, ...otherProps }) => {
  const props = {
    viewBox: "0 0 16 18",
    width: size || 16,
    height: size || 18,
    ...otherProps
  };

  return (
    <StyledChevronArrow {...props}>
      <path d="M14.3 12.1L8 6.6l-6.3 5.5-1.4-1.6L8 3.9l7.7 6.6z" />
    </StyledChevronArrow>
  );
};

ChevronArrow.displayName = "SVGS.Icon.ChevronArrow";

ChevronArrow.propTypes = {
  ...svgShape,
  rotate: PropTypes.number
};

export default ChevronArrow;
