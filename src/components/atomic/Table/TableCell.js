import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TableCell = styled.td`
  border: 0;
  text-align: left;
  white-space: pre-wrap;
  border-left: 0;
  border-right: 0;
  padding: 0.25rem 0.5rem 0.25rem 0.75rem;

  ${({ as }) =>
    as === "th"
      ? css`
          background-color: inherit;
          font-weight: var(--ifm-heading-font-weight);
          text-align: right;
          border: 0;
          white-space: nowrap;
          padding: 0.25rem 0.5rem 0.25rem 0.75rem;
        `
      : css`
          background-color: inherit;
          width: 100%;
          border: 0;
          padding: 0.25rem 0.5rem;
        `}
`;

TableCell.propTypes = {
  block: PropTypes.bool
};

TableCell.displayName = "Atomic.Table.Cell";

export default TableCell;
