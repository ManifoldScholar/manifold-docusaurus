---
id: accessibility
title: Accessibility
sidebar_label: Accessibility
---

## Our Approach

We’ve made accessibility a first-class, non-negotiable design philosophy. For us, accessibility is an ongoing practice rather than an endpoint, and we are committed to ensuring everyone using Manifold can access, engage with, and create content in meaningful and exciting ways. There are a lot of reasons why we made Manifold, and joy is an integral element in all of them. So when we talk about accessibility, we aren’t talking about simply “checking the accessibility box” for some imaginary person in a darkened back room. We earnestly want to create a platform where all readers—sighted, print-disabled, or otherwise—can have engaging and enjoyable experiences.

On this page, you can learn more about how the Manifold team works to meet these goals. We discuss accessibility strategies and compatibility in the following sections. If something here isn’t as clear as you’d like or you have additional questions, we’ve also provided our contact information. Please don’t hesitate to use it.

## Strategies

- **Development and Design**. We use a combination of approaches to verify our accessibility work. We use automated analysis tools such as [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), and [JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y), as well as actually using screen readers ([Voice Over](https://help.apple.com/voiceover/info/guide/10.13/#/), [NVDA](https://www.nvaccess.org/)), browser plug-ins ([WAVE](https://wave.webaim.org/extension/), [Axe](https://www.deque.com/axe/browser-extensions/)), and various OS settings like Reduced Motion.
- **Tracking**. We track our progress on [individual accessibility issues](https://github.com/ManifoldScholar/manifold/issues?q=is%3Aissue+label%3A%22Type%3A+Accessibility%22+) while also maintaining a [roadmap of our efforts](https://github.com/orgs/ManifoldScholar/projects/1) in our public [Github repository](https://github.com/ManifoldScholar/manifold).
- **Partnerships**. We partner with colleagues such as the [University of Washington Libraries](https://www.lib.washington.edu/) and [Accessible Technology Services](https://www.washington.edu/doit/accessible-technology-services-0?_ga=2.80187924.223852829.1634229208-1499609613.1634229208) to conduct regular accessibility reviews of Manifold and to discuss issues of accessibility more generally.
- **Standards Compliance**. We aim to have the Manifold platform meet the latest [WCAG 2 AA Standards](https://www.w3.org/WAI/WCAG2AA-Conformance) (currently WCAG 2.1 AA).
- Education. We work with [Manifold publishers](https://manifoldapp.org/community) to encourage them to create accessible source materials so that publications on Manifold will be accessible.

## Keyboard Compatibility

In library views and within the Manifold reader, the application can be navigated and interacted with using the expected keyboard controls. Where appropriate, Manifold will deliver context-specific instruction to users when they focus on elements so they know how to perform an action in that space.

### Standard Navigation

- **Tab** advances focus forward, left to right and down the page
- **Shift + Tab** moves focus backward, right to left and up the page
- **Enter** or **Return** selects

### Reader Navigation

- **Space** or **Page Down** advance the view down the page by a screen view
- **Page Up** moves the view back up the page by a screen view
- **Up** and **Down** keys adjust the view forward or backward by line
- **Home** and **End** move view to the top or bottom of the page

### Backend Navigation

- Drag and drop elements can be selected using the space bar and reordered using the arrow keys.

### Resource Navigation

- YouTube and Vimeo video resources can be navigated using the keyboard commands of those respective apps. Refer to the documentation from [YouTube](https://support.google.com/youtube/answer/7631406?hl=en) or [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/115002267667-Player-keyboard-shortcuts) for more.
- Manifold’s audio and video players do not currently support keyboard functionality.
- Interactive resources are remotely hosted content and beyond the scope of what Manifold can control. If publishers use platforms that have keyboard functionality, that same functionality will be included in the Manifold experience.

## Disclaimer

Manifold is distributed software that is used by many different publishers and groups. We work diligently to ensure the application is itself accessible and can render standards-compliant accessibility frameworks and metadata to assistive technology in the expected ways. However, the obligation of creating accessible content falls to those who maintain their own Manifold instance.

## Contact Us

If you need accessibility-related help with a Manifold publication, please contact us at <contact@manifoldapp.org>.

If you would like to report an issue with the Manifold platform, please [email us](mailto:contact@manifoldapp.org) or submit an [issue](https://github.com/ManifoldScholar/manifold/issues) or start a [discussion](https://github.com/ManifoldScholar/manifold/discussions) in our GitHub repository. We are also widely available on [Twitter](https://twitter.com/ManifoldScholar) and [Slack](https://manifold-slackin.herokuapp.com/) for help.