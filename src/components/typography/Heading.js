import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/*
Styled component for header tags

<Heading as="h1" color="color-secondary">
  H1 heading text in secondary color
</Heading>
*/
const Heading = styled.div`
  color: var(${({ color }) => (color ? `--${color}` : "--header-color")});

  > span {
    color: var(
      --${({ color }) => (color ? "header-color" : "color-secondary")}
    );
  }

  ${({ underline }) =>
    underline &&
    css`
      display: inline-block;
      border-bottom: 3px solid var(--color-secondary);
      padding-bottom: 0.25em;
    `};

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
      letter-spacing: 1.75px;
      line-height: 1.714;
      font-size: var(--font-size-uppercase);
    `}

  /* Always use the proper header tag - size should be used sparingly */
  ${({ size }) =>
    size &&
    css`
      font-size: var(${`--font-size-${size}`});
    `};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: var(--font-weight- ${weight});
    `};
`;

Heading.displayName = "Typography.Heading";

Heading.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.bool,
  weight: PropTypes.oneOf(["regular", "medium", "semi-bold"]),
  uppercase: PropTypes.bool
};

export default Heading;
