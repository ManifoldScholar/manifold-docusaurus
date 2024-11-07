/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Link from "@docusaurus/Link";
import IconFactory from "../../components/factories/IconFactory";
import styles from "./PaginationLink.module.css";
import { clsx } from "clsx";

type Props = {
  to: string;
  label: string;
  sublabel?: string;
  isNext?: boolean;
};

function PaginationLink({ to, label, sublabel, isNext }: Props) {
  return (
    <Link className={clsx("pagination-nav__link", {
      "pagination-nav__link--next": isNext
    })} to={to}>
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

export default PaginationLink;
