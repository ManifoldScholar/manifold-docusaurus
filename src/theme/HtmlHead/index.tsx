import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";

const THEME_COLOR = "#52E3AC";

const HtmlHead = () => {
  const { metaData } = useThemeConfig();
  const { ogImage, ogImageAlt } = metaData;

  return (
    <Head>
      <meta name="theme-color" content={THEME_COLOR} />
      {ogImage && <meta name="og:image" content={useBaseUrl(ogImage)} />}
      {ogImageAlt && <meta name="og:image:alt" content={ogImageAlt} />}
      {ogImage && <meta name="twitter:image" content={useBaseUrl(ogImage)} />}
      {ogImageAlt && <meta name="twitter:image:alt" content={ogImageAlt} />}
      <link
        rel="icon"
        type="image/svg+xml"
        sizes="32x32"
        href={useBaseUrl("/favicon/favicon.svg")}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={useBaseUrl("/favicon/apple-touch-icon.png")}
      />
      <link rel="manifest" href={useBaseUrl("/favicon/site.webmanifest")} />
      <link
        rel="mask-icon"
        href={useBaseUrl("favicon/safari-pinned-tab.svg")}
        color={THEME_COLOR}
      />
      <meta name="msapplication-TileColor" content={THEME_COLOR} />
      <link rel="stylesheet" href="https://use.typekit.net/utk2yhm.css" />
    </Head>
  );
};

export default HtmlHead;
