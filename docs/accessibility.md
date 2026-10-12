---
id: accessibility
title: Accessibility
sidebar_label: Accessibility
---

## Our Approach

We’ve made accessibility a first-class, non-negotiable design philosophy. For us, accessibility is an ongoing practice rather than an endpoint, and we are committed to ensuring everyone using Manifold can access, engage with, and create content in meaningful and exciting ways. There are a lot of reasons why we made Manifold, and joy is integral to all of them. When we talk about accessibility, we aren’t talking about simply “checking the accessibility box” for an imaginary person in a darkened back room. We earnestly want to create a platform where all readers—sighted, print-disabled, or otherwise—can have engaging and enjoyable experiences.

On this page, you can learn more about how the Manifold team works to meet these goals and access our accessibilty VPAT documents. We discuss accessibility strategies and compatibility in the following sections. If something here isn’t as clear as you’d like or you have additional questions, we’ve also provided our contact information. Please don’t hesitate to use it.

## VPAT

This Voluntary Product Accessibility Template (VPAT) report evalutes the Manifold instance homepage, project page, and reading interfaces for conformance with WCAG 2.2 at the A and AA levels, for Section 508 Standards, and for Accessibility requirements for ICT products and services.

[Download the Manifold VPAT](/downloads/Manifold%202026%20Manual%20Audit%20Accessibility%20Conformance%20Report.pdf).

## Strategies

- **Development and Design**. All of our user interface designs follow WCAG’s guidelines for visual elements. We make sure all elements have adequate color contrast and text size, that interactive elements are large enough for touch interaction, and that visual indicators are included for element states like hover and focus.

	When interfaces are built, developers begin with a foundation of semantic HTML. We supplement this with ARIA to ensure that the structure, contents, and state of the application are fully conveyed to assistive technologies. In addition, we include predictable keyboard controls for all interactive widgets and low-motion alternatives for all animations. To give us confidence in our approach, we lean on established [design patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and [proven practices](https://www.w3.org/TR/using-aria/#NOTES).

	Developers also give priority attention to reports of existing bugs in the application and work directly with Manifold users to define and implement solutions.

	In all of our work, we use a broad set of testing tools and strategies. We employ software like [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/), and [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) for automated tests. We also do thorough manual evaluation of our work that includes, but is not limited to, keyboard navigation, zooming, reduced-motion mode browsing, and screen reader interaction with VoiceOver and NVDA. As one final check, all code we write must pass an [accessibility-focused code linter](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) before it is merged and deployed.
- **Tracking**. We track our progress on [individual accessibility issues](https://github.com/ManifoldScholar/manifold/issues?q=is%3Aissue+label%3A%22Type%3A+Accessibility%22+) in our public [Github repository](https://github.com/ManifoldScholar/manifold).
- **Standards Compliance**. We aim to have the Manifold platform meet the latest [WCAG 2 AA Standards](https://www.w3.org/WAI/WCAG2AA-Conformance) (currently WCAG 2.2 AA).
- **Education**. We work with [Manifold publishers](https://manifoldapp.org/community) to encourage them to create accessible source materials so that publications on Manifold will be accessible.

## Accessible Annotation

Manifold now fully supports annotating with a keyboard and screenreader. This has been tested in both NVDA and JAWS with caret browsing as well as VoiceOver.

## Keyboard Navigation

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

- Drag and drop elements appear throughout the backend and in frontend Reading Group views as list items with a reordering button. The reordering button displays as an icon showing two horizontal grab bars.

  To move an element, focus on the reordering button with your tab key and select it with your space bar. When the reordering button is selected, a menu with two options appears, giving you the choice to move the element up one position or down one position in the list. These up and down options can be selected using your arrow keys and the space bar.

### Resource Navigation

- YouTube and Vimeo video resources can be navigated using the keyboard commands of those respective apps. Refer to the documentation from [YouTube](https://support.google.com/youtube/answer/7631406?hl=en) or [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/115002267667-Player-keyboard-shortcuts) for more.
- Interactive resources are remotely hosted content and beyond the scope of what Manifold can control. If publishers use platforms that have keyboard functionality, that same functionality will be included in the Manifold experience.

## Disclaimer

Manifold is distributed software that is used by many different publishers and groups. We work diligently to ensure the application is itself accessible and can render standards-compliant accessibility frameworks and metadata to assistive technology in the expected ways. However, the obligation of creating accessible content falls to those who maintain their own Manifold instance.

## Contact Us

If you need accessibility-related help with a Manifold publication, please contact us at [contact@manifoldapp.org](mailto:contact@manifoldapp.org).

If you would like to report an issue with the Manifold platform, please [email us](mailto:contact@manifoldapp.org) or submit an [issue](https://github.com/ManifoldScholar/manifold/issues) or start a [discussion](https://github.com/ManifoldScholar/manifold/discussions) in our GitHub repository.
