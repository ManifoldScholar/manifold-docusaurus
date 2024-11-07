/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import PaginationLink from "../PaginationLink";

function BlogListPaginator(props) {
  const { metadata } = props;
  const {
    previousPage,
    nextPage,
    postsPerPage,
    page,
    totalPages,
    totalCount
  } = metadata;
  const nextPostCount =
    totalPages - page === 1 ? totalCount - page * postsPerPage : postsPerPage;

  // Wrapping in margin-vert--xl matches blog post pagination wrapper
  return (
    <div className="margin-vert--xl">
      <nav className="pagination-nav" aria-label="Blog list page navigation">
        <div className="pagination-nav__item">
          {previousPage && (
            <PaginationLink
              to={previousPage}
              label={`Previous ${postsPerPage} Posts`}
            />
          )}
        </div>
        <div className="pagination-nav__item pagination-nav__item--next">
          {nextPage && (
            <PaginationLink
              to={nextPage}
              label={
                nextPostCount > 1 ? `Next ${nextPostCount} Posts` : `Next Post`
              }
              isNext
            />
          )}
        </div>
      </nav>
    </div>
  );
}

export default BlogListPaginator;
