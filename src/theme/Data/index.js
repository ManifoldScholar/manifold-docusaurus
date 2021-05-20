import React from 'react';
import get from "lodash/get";
const semverSort = require('semver/functions/sort')
import siteConfig from '@generated/docusaurus.config';

const { customFields } = siteConfig;
const data = customFields.data;

function releaseFor(os, version) {
  if (!os || !version) return null;
  const release = data.releases[os][version];
  return release;
}

function calculateHighestVersionFor(os) {
  if (!os) return null;
  const releases = data.releases[os];
  if (!releases) return null;
  const releaseVersions = Object.keys(releases);
  const sortedReleaseVersions = semverSort(releaseVersions);
  const highestVersion = sortedReleaseVersions.slice(-1)[0];
  return highestVersion || null;
}

function prefixVersion(version) {
  if (!version) return null;
  if (version.startsWith('v')) return version;
  return `v${version}`;
}

export function getData(command, value) {

  if (command === "path") {
    return get(data, value);
  } else if (command === "highestVersionFor") {
    return prefixVersion(calculateHighestVersionFor(value));
  } else if (command === "installUrlFor") {
    const release = releaseFor(value, calculateHighestVersionFor(value));
    return release.url
  } else if (command === "basenameFor") {
    const release = releaseFor(value, calculateHighestVersionFor(value));
    return release.basename
  } else {
    return null;
  }
}

export default function Data({ path, highestVersionFor, installUrlFor }) {
  if (path) return getData("path", path);
  if (highestVersionFor) return getData("highestVersionFor", highestVersionFor);
  return null;
}
