// This code is terrible. I will refactor it. I don't know what I was thinking, and I'm sorry. Love, Zach.
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
  return highestVersion(releaseVersions);
}

function calculateHighestStableVersionFor(os) {
  if (!os) return null;
  const releases = data.releases[os];
console.log(releases);
  if (!releases) return null;
  const releaseVersions = Object.keys(releases);
  const stableReleaseVersions = releaseVersions.filter((version) => !version.includes("-alpha") && !version.includes("-beta") && !version.includes("-rc") )
  return highestVersion(stableReleaseVersions);
}

function sortVersions(versions) {
  return semverSort(versions);
}

function highestVersion(versions) {
  return sortVersions(versions).slice(-1)[0] || null
}

function prefixVersion(version) {
  if (!version) return null;
  if (version.startsWith('v')) return version;
  return `v${version}`;
}

export function getData(command, argument) {
  if (command === "path") {
    return get(data, argument);
  } else if (command === "highestVersionFor") {
    return prefixVersion(calculateHighestVersionFor(argument));
  } else if (command === "highestStableVersionFor") {
    return prefixVersion(calculateHighestStableVersionFor(argument));
  } else if (command === "installUrlFor") {
    const release = releaseFor(argument, calculateHighestStableVersionFor(argument));
    return release.url
  } else if (command === "prereleaseStatement") {
    if (calculateHighestStableVersionFor(argument) == calculateHighestVersionFor(argument)) return null
    return (
      <span>There is also currently a pre-release version of Manifold,{' '}
        <strong>{calculateHighestVersionFor(argument)}</strong>,{' '}
        which we encourage you to test.{' '}
      </span>
    )
  } else if (command === "basenameFor") {
    const release = releaseFor(argument, calculateHighestStableVersionFor(argument));
    return release.basename
  } else {
    return null;
  }
}

export default function Data({ command, argument }) {
  const result = getData(command, argument);
  return result;
}
