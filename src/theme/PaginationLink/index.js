/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";
import IconFactory from "../../components/factories/IconFactory";
import styles from "./styles.module.scss";

function PaginationLink({ to, label, sublabel, isNext }) {
  return (
    <Link className="pagination-nav__link" to={to}>
      {sublabel && <div className="pagination-nav__sublabel">{sublabel}</div>}
      <div className={`${styles.paginationLink} pagination-nav__label`}>
        {isNext ? (
          <>
            <span>{label}</span>
            <IconFactory icon="prevNextArrow" />
          </>
        ) : (
          <>
            <IconFactory icon="prevNextArrow" rotate={180} />
            <span>{label}</span>
          </>
        )}
      </div>
    </Link>
  );
}

PaginationLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string,
  isNext: PropTypes.bool
};

export default PaginationLink;
