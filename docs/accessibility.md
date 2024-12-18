---
id: accessibility
title: Accessibility
sidebar_label: Accessibility
---

## Our Approach

We’ve made accessibility a first-class, non-negotiable design philosophy. For us, accessibility is an ongoing practice rather than an endpoint, and we are committed to ensuring everyone using Manifold can access, engage with, and create content in meaningful and exciting ways. There are a lot of reasons why we made Manifold, and joy is an integral element in all of them. So when we talk about accessibility, we aren’t talking about simply “checking the accessibility box” for some imaginary person in a darkened back room. We earnestly want to create a platform where all readers—sighted, print-disabled, or otherwise—can have engaging and enjoyable experiences.

On this page, you can learn more about how the Manifold team works to meet these goals. We discuss accessibility strategies and compatibility in the following sections. If something here isn’t as clear as you’d like or you have additional questions, we’ve also provided our contact information. Please don’t hesitate to use it.

## Strategies

- **Development and Design**. All user interface design that we do follows WCAG’s guidelines for visual elements. We make sure all elements have adequate color contrast and text size, that interactive elements are large enough for touch interaction, and that visual indicators are included for element states like hover and focus.

	When those interfaces are built, developers begin with a foundation of semantic HTML. We supplement this with ARIA to ensure that the structure, contents, and state of the application are fully conveyed to assistive technologies. In addition, we include predictable keyboard controls for all interactive widgets and low-motion alternatives for all animations. To give us confidence in our approach, we lean on established [design patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and [best practices](https://www.w3.org/TR/using-aria/#NOTES).

	Developers also give priority attention to reports of existing bugs in the application and work directly with Manifold users in GitHub to define and implement solutions.

	In all of our work, we use a broad set of testing tools and strategies. We employ software like [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/), and [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for automated tests. We also do thorough manual evaluation of our work that includes, but is not limited to, keyboard navigation, zooming, reduced-motion mode browsing, and screen reader interaction with VoiceOver and NVDA. As one final check, all code we write must pass an [accessibility-focused code linter](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) before it is merged and deployed.
- **Tracking**. We track our progress on [individual accessibility issues](https://github.com/ManifoldScholar/manifold/issues?q=is%3Aissue+label%3A%22Type%3A+Accessibility%22+) while also maintaining a [roadmap of our efforts](https://github.com/orgs/ManifoldScholar/projects/1) in our public [Github repository](https://github.com/ManifoldScholar/manifold).
- **Standards Compliance**. We aim to have the Manifold platform meet the latest [WCAG 2 AA Standards](https://www.w3.org/WAI/WCAG2AA-Conformance) (currently WCAG 2.1 AA).
- **Education**. We work with [Manifold publishers](https://manifoldapp.org/community) to encourage them to create accessible source materials so that publications on Manifold will be accessible.

## Accessible Annotation

Unfortunately we are currently unable to support annotation with NVDA and JAWS, the two most common screen readers. This has to do with how these pieces of software are designed. NVDA and JAWS have two different modes: a “browse” (“read”) mode for reading the contents of a webpage, and a “focus” (“forms”) mode for interacting with page content like buttons and forms.

Much like with caret browsing, browse mode utilizes the arrow keys to allow a user to control their cursor position in the document. However, there is a fundamental difference between caret browsing, which is a browser feature, and browse mode, which is an NVDA/JAWS feature. In caret browsing, the user is interacting directly with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "Introduction to the Document Object Model"). In browse mode, the screen reader extracts page content from the DOM into an invisible text layer known as the “virtual buffer.” In this mode, all keystrokes are intercepted by the screen reader. The browser, and Manifold, know nothing about them. Manifold community members have reported that while in browse mode, both NVDA and JAWS read out the user’s keyboard text selection, but that the text itself is not visibly selected and Manifold’s annotation menu doesn’t open as it does when selected by a mouse. We’ve tested this in NVDA and can confirm this behavior—even after our most recent work, forthcoming version 8.0, that persists a user’s place in a text after using the keyboard to access the annotation pop-up or drawer. While unfortunate, this is neither surprising nor unexpected, since this is how browse mode is designed.

Focus mode, meanwhile, is basically the usual keyboard experience for navigating webpages. Keystrokes in this mode are sent directly to the application controlled by the screen reader, which in this case is the browser and Manifold. In focus mode, with caret browsing enabled in the browser, users can annotate with their keyboard, but the screen reader does not announce what text a user has actually selected for annotation. This, again, is to be expected. These screen readers only announce selection in the virtual buffer. So while it is technically possible to annotate in focus mode, functionally speaking, screen-reader users who have low or no vision will not be able to easily annotate a text, since they won’t know what text they have selected without first having to change between focus and browse modes.

Our friends at Hypothes.is have a really helpful issue in their [GitHub repository](https://github.com/hypothesis/product-backlog/issues/1148) that provides further background on this challenge and demonstrates how it is not something that can be solved by Manifold or any other tool for annotating on the web.

On the bright side, the issue in the Hypothes.is repository links to recent work in Microsoft’s accessibility API and in NVDA to couple text selection between the DOM and virtual buffer. It appears that this work is just waiting on a browser to implement it. When that happens, using NVDA for annotation in Manifold should just work.

Finally, there is VoiceOver. Unlike NVDA and JAWS, VoiceOver does not use a virtual buffer. While it is designed to work best with Safari, which does not support caret browsing, testing with VoiceOver on Chrome and Firefox did produce the accessible annotation experience we are looking for: the interface is fully navigable with a keyboard, and selections-in-progress are highlighted and announced. While this is constrained by operating system and browser, we can at least provide some level of screen reader support.

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

- Drag and drop elements can be selected using the space bar and reordered using the arrow keys.

### Resource Navigation

- YouTube and Vimeo video resources can be navigated using the keyboard commands of those respective apps. Refer to the documentation from [YouTube](https://support.google.com/youtube/answer/7631406?hl=en) or [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/115002267667-Player-keyboard-shortcuts) for more.
- Manifold’s audio and video players do not currently support keyboard functionality.
- Interactive resources are remotely hosted content and beyond the scope of what Manifold can control. If publishers use platforms that have keyboard functionality, that same functionality will be included in the Manifold experience.

## Disclaimer

Manifold is distributed software that is used by many different publishers and groups. We work diligently to ensure the application is itself accessible and can render standards-compliant accessibility frameworks and metadata to assistive technology in the expected ways. However, the obligation of creating accessible content falls to those who maintain their own Manifold instance.

## Contact Us

If you need accessibility-related help with a Manifold publication, please contact us at [contact@manifoldapp.org](mailto:contact@manifoldapp.org).

If you would like to report an issue with the Manifold platform, please [email us](mailto:contact@manifoldapp.org) or submit an [issue](https://github.com/ManifoldScholar/manifold/issues) or start a [discussion](https://github.com/ManifoldScholar/manifold/discussions) in our GitHub repository. We are also widely available on [Twitter](https://twitter.com/ManifoldScholar) and [Slack](https://manifold-slackin.herokuapp.com/) for help.