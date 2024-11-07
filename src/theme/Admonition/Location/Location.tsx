import React from 'react';
import AdmonitionLayout from '@theme/Admonition/Layout';
import type {Props} from '@theme/Admonition/Layout';
import clsx from 'clsx';

function Location(props: Props) {
  return (
    <AdmonitionLayout
      {...props}
      icon={<></>}
      title="Location"
      className={clsx("alert alert--location", props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}

export default Location;