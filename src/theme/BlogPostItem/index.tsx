/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";
import type { Props } from '@theme/BlogPostItem';
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { BlogPost } from "../../components/templates/Blog";

export default function BlogPostItem(props: Props) {
  const { metadata, isBlogPostPage, frontMatter } = useBlogPost();

  const { children } = props;
  const image = frontMatter?.image || null;
  const imageUrl = image ? useBaseUrl(image, {
    absolute: false
  }) : null;
  const imageAlt = ""; // frontMatter?.image_alt || "";
  const keywords = frontMatter?.keywords || [];

  return (
    <>
      <Head>
        {keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta name="twitter:image" content={imageUrl} />}
        {image && <meta name="twitter:image:alt" content={imageAlt} />}
      </Head>
      <BlogPost
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        permalink={isBlogPostPage ? null : metadata?.permalink}
        title={metadata?.title}
        date={metadata?.date}
      >
        <div className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>
      </BlogPost>
    </>
  );
}
