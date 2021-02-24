/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import OriginalBlogPostItem from "@theme-original/BlogPostItem";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";
import styles from "./styles.module.scss";

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";

import { BlogPost } from "../../components/templates/Blog";

export default function BlogPostItem(props) {
  const { frontMatter, metadata, isBlogPostPage = false, children } = props;
  const { image, image_alt, title, keywords } = frontMatter;
  const { permalink, date } = metadata;
  const imageUrl = useBaseUrl(image, {
    absolute: false
  });

  return (
    <>
      <Head>
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta name="twitter:image" content={imageUrl} />}
        {image && <meta name="twitter:image:alt" content={image_alt} />}
      </Head>
      <BlogPost
        imageUrl={imageUrl}
        imageAlt={image_alt}
        permalink={isBlogPostPage ? null : permalink}
        title={title}
        date={date}
      >
        <div className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>
      </BlogPost>
    </>
  );
}
