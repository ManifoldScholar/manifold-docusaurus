import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/PaginatorNavLink';
import IconFactory from '@site/src/components/factories';

export default function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel, isNext} = props;
  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
      <div className="pagination-nav__label">
        {!isNext && (
          <IconFactory icon="prevNextArrow" rotate={180} />
        )}
        <span>{title}</span>
        {isNext && (
          <IconFactory icon="prevNextArrow" />
        )}
      </div>
    </Link>
  );
}
