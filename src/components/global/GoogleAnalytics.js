import React from "react";

export default function GoogleAnalytics() {
  const gaId = process.env.GOOGLE_ANALYTICS;

  return gaId ? (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${gaId}');`,
        }}
      />
    </>
  ) : null;
}
