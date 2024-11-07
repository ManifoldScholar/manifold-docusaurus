/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import PaginationLink from "../PaginationLink";

function DocPaginator(props) {
  const { metadata } = props;
  return (
    <nav className="pagination-nav" aria-label="Blog list page navigation">
      <div className="pagination-nav__item">
        {metadata.previous && (
          <PaginationLink
            to={metadata.previous.permalink}
            sublabel="Previous"
            label={metadata.previous.title}
          />
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {metadata.next && (
          <PaginationLink
            to={metadata.next.permalink}
            sublabel="Next"
            label={metadata.next.title}
            isNext
          />
        )}
      </div>
    </nav>
  );
}

export default DocPaginator;
