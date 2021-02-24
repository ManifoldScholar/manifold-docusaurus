import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { tMonoface } from "../../styles/mixins";

/*
Styled component for paragraphs, spans, and div text

<Text as="p" size="xl">
  Some extra large text in a paragraph tag
</Text>
*/
const Text = styled.span`
  color: var(${({ color }) => (color ? `--${color}` : "--text-color")});

  ${({ monospaced }) => monospaced && tMonoface};

  ${({ underline, underlineColor }) =>
    underline &&
    css`
      display: inline-block;
      border-bottom: 2px solid var(-- ${underlineColor || "text-color"});
      padding-bottom: 0.25em;
    `};

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

Text.displayName = "Typography.Text";

Text.propTypes = {
  color: PropTypes.string,
  underline: PropTypes.bool,
  underlineColor: PropTypes.string,
  size: PropTypes.string,
  monospaced: PropTypes.bool,
  weight: PropTypes.oneOf(["regular", "medium", "semi-bold"])
};

export default Text;
