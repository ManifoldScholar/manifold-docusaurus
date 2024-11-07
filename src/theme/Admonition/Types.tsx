import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Location from './Location';

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'location': Location,
};

export default AdmonitionTypes;