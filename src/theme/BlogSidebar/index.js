/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import OriginalBlogSidebar from "@theme-original/BlogSidebar";
import styles from "./styles.module.scss";

export default function BlogSidebar(props) {
  // We don't want a blog sidebar navigation, so let's remove it
  return null;

  // return (
  //   <div className={styles.blogSidebarWrapper}>
  //     <OriginalBlogSidebar {...props} />
  //   </div>
  // );
}
