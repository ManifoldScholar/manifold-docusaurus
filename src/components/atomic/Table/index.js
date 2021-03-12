import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import TableCell from "./TableCell";

const Table = styled.table`
  display: table;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  width: 100%;
  border: 0;
  border-collapse: collapse;
`;

Table.propTypes = {
  block: PropTypes.bool
};

Table.displayName = "Atomic.Table";

Table.Cell = TableCell;
export default Table;
