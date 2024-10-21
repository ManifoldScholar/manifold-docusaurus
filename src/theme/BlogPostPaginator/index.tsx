/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PaginationLink from "../PaginationLink";

function BlogPostPaginator(props: any) {
  const { nextItem, prevItem } = props;

  return (
    <nav className="pagination-nav margin-vert--xl" aria-label="Blog post page navigation">
      <div className="pagination-nav__item">
        {prevItem && (
          <PaginationLink
            to={prevItem.permalink}
            sublabel="Previous Post"
            label={prevItem.title}
          />
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {nextItem && (
          <PaginationLink
            to={nextItem.permalink}
            sublabel="Next Post"
            label={nextItem.title}
            isNext
          />
        )}
      </div>
    </nav>
  );
}

export default BlogPostPaginator;
