import React from 'react';
import siteConfig from '@generated/docusaurus.config';
import Spec from '@theme/Spec';
const semverSort = require('semver/functions/sort')

const { customFields } = siteConfig;
const { releases } = customFields.data;

function Downloads({ os }) {

  const osReleases = releases[os]
  const versions = semverSort(Object.keys(osReleases));
  versions.reverse();
  if (!osReleases) return "There are no releases for this operating system yet. Check back soon for a v6 release!"
  return (
    <>
      {versions.map((version) => {
        const release = osReleases[version];
        return (
          <div key={release.build_version}>
            <h3>Manifold v{release.build_version}</h3>
            <p>
              <a href={release.url}>Download Package for {release.platform} {release.platform_version} {release.arch}</a><br />
              <small><strong>SHA256:</strong> {release.sha256}</small><br />
            </p>
          </div>
        )
      })}
    </>
  )


}

export default Downloads;
