---
slug: "webaccessibilityroadmapformanifold"
title: "Web Accessibility Roadmap for Manifold"
---

## Introduction

Web accessibility is a broad term used to describe any strategies, user interfaces, or content, specifically designed with assistive technologies (AT) and/or disabled users in mind. In developing the Manifold web app we strive for it to be as accessible as possible. Our particular focus is on the screen reader user experience. In this document we’ll explore the guidelines used in determining an acceptable level of accessibility, the best tools to aid in development, what AT compatibility pitfalls to avoid, and the strategies for continuing development. Hopefully this document will outline what work has been completed thus far, as well as describe some best practices for moving forward.

<!--truncate-->

## Guidelines

The Web Accessibility Initiative (WAI) and the Web Content Accessibility Guidelines Working Group (WCAG WG), under the umbrella of the World Wide Web Consortium (W3C), have created a truly comprehensive set of accessibility guidelines—[WCAG](https://www.w3.org/WAI/WCAG20/quickref/)—for acceptable and responsible web accessibility. (The guidelines are also available with a slightly more friendly interface [here](http://romeo.elsevier.com/accessibility_checklist/).) Not only do they include considerations for almost every conceivable type of web interaction, element, and piece of content, they have also developed a rubric for measuring your compliance and, to some extent, provide strategies for achieving compliance. Some of these guidelines find their genesis in the [Section 508 amendment to the US Rehabilitation Act of 1973](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/), which sought to address requirements for US government website accessibility. The WCAG is an indispensable resource for this kind of work and, on Manifold, I find myself referring to it almost every time I tackle a web accessibility issue. We currently only endeavor to meet the minimum standards, and we track our general progress in this [Github issue checklist of W3C 2.0 Accessibility Guidelines](https://github.com/ManifoldScholar/manifold/issues/1037).

## Tools

There are [several tools](https://www.w3.org/WAI/ER/tools/) that help you evaluate any website’s general level of WCAG compliance. Many of these tools are browser-based and do a fairly good job of scraping a website’s content, given a url, and outputting a list of criteria met, exceeded, or not met. And while sometimes it is helpful to use the browser to evaluate compliance, for Manifold it is most helpful to evaluate compliance while you’re developing in real-time (or when the React components build). To aid in this endeavor we use [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y), a JSX linter that flags possible WCAG exceptions; [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), a color blindness simulator; a browser-based [color contrast inspector](https://webaim.org/resources/contrastchecker/); and [VoiceOver](https://help.apple.com/voiceover/info/guide/10.12/), the default macOS screen reader.

### Linter

[Jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) has a set of [fully customizable rules](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules) almost all of which neatly line up with an article of the WCAG. Each supported rule is listed in the `.eslintrc` config file. A `2` value for a rule indicates it is active. Those rules that are not currently active are either not applicable to Manifold or evaluate guideline conditions beyond our compliance baseline. As new features are added to Manifold, or existing components are refactored, it is crucial to pay close attention to the errors and warnings the linter provides during builds, as they fairly consistently indicate a problem for AT. However, the linter is not infallible and, should a component get flagged that performs on AT as expected, [inline linter rule overrides](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments) may be used judiciously.

### Color Contrast Checker
One type of evaluation the jsx-a11y linter will not assist with is problematic color contrasts. The [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/) takes a text color and a background color, uses the WCAG minimum color contrast ratios as benchmarks, and determines whether the combination of colors meet those benchmarks. Meeting these minimum contrasts is crucial for maintaining legibility of text against a background color. However it’s important to maintain Manifold’s branded color scheme, and respect the design in general, so all such issues should be addressed in coordination with a designer.

### Color Blindness Checker
A tool to assist in determining the impact of color combinations on those with various forms of color blindness is [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/). This color blindness simulator lets you preview how how folks with various forms of color blindness will perceive various content. It doesn’t output any metrics (just a visual representation) so you have to make your own decisions as to what is or isn’t legible but it does provide a quick reference when making changes to address color combination concerns.

### Screen Reader

Finally, as with so much frontend development, sometimes the best test is trying stuff out yourself. Just as you wouldn’t make general alterations to the user interface, or other visual components, without interacting with them yourself in various browsers, it is just as important to test recent updates in screen readers too. [A recent study estimated](https://nfb.org/blindness-statistics) that as much as 2.7 percent of the US adult population is blind (6,833,000 folks). [Another study suggests](https://webaim.org/projects/screenreadersurvey5/) 5 percent of AT users do not “use a screen reader due to a disability.” For a sighted-user, a UX (user experience) issue might only present an annoyance or visual discrepancy. However, a web accessibility issue leaves fundamental interactions ineffectual or whole swaths of content unavailable to an AT User. And, given the above statistics, that could mean 7,000,000 folks can’t use your website as intended.

The default screen reader in macOS is Voiceover. [According to one survey](https://webaim.org/projects/screenreadersurvey5/#used) it is the third most used screen reader (coming in behind two windows only screen readers: NVDA and JAWS) but, like testing in Chrome first, testing web accessibility in Voiceover still provides an middling baseline. However, just like web browsers, there are breaking differences between the popular screen readers.

## AT Compatibility

When we use a CSS property, JavaScript method, or HTML5 attribute in a new frontend feature, we rely on sites like [Can I Use](https://caniuse.com/) to determine if that feature will behave the same across modern browsers. When developing for screen readers we often make use of AT specific HTML attributes called [ARIA attributes](https://www.w3.org/TR/html-aria/) and there are [resources similar to Can I Use](https://www.powermapper.com/tests/screen-readers/aria/) to help us determine what ARIA attributes are compatible across which screen readers. In some cases using an ARIA attribute is the best way to supply information to AT. In other cases it is merely the most convenient. However in most cases (for instance alt text on images or labels for form fields) there is another way to supply the desired information to AT totally independently of ARIA. If so, this is always the preferred solution as it stands the best chance of being presented by various screen readers in the same manner.

## Maintaining and Extending Accessibility Features

Most of the web accessibility work for Manifold is concerned with making the unseen seen on AT. In most cases this means supplying a text alternative to a visual-only element. In this section we’ll review some of the general strategies and unique challenges to improving Manifold’s web accessibility.

### Alt Text

So much of adapting content to AT is giving a screen reader something to read. On Manifold, visual content not “read” by the screen reader loosely calls into three categories: presentational, content, and interactive.

#### Presentational

A presentational image is one that is corollary or even superfluous to the information with which it is associated. One example of this might be the waveform imagery displayed as part of the Audio Resource player: someone using AT can still use the player, enjoy and control the audio, and get information about the audio presented, without ever seeing the animated waveform. A sighted user’s experience might be different, but it is not dramatically improved by, or dependent on, the presence of the waveform. In most cases, presentational elements should be hidden to AT as their inclusion tends to clutter up and slow down screen reader navigation. There are three main ways to hide content from AT:

- Use `display: none`. Setting an element’s display property to none effectively removes an element from the DOM flow. Similarly it will also hide it from a screen reader. Be aware, CSS-only strategies that visually hide elements (e.g., setting `visibility: hidden`, absolutely positioning an element out of view, etc.) **do not** hide elements from screen readers.
- Use the `hidden="true"` attribute. Like `display: none`, this will remove the element from the flow in **both** the browser and the screen reader. Unlike using CSS, this attribute instructs the browser to set the element as `display: none` and, as such, it’s often easier to conditionally toggle.
- Use `aria-hidden="true"` attribute. This attribute is supported across all modern screen readers and will have the same effect as `hidden="true"` except it will **only** be hidden for screen readers. This attribute should not be used on interactive/focusable elements as many screen readers will not respect it (the element will still be focusable but the screen reader won’t “read” anything to the user).

#### Content

A content image is an image that provides vital information on its own or provides meaningful context to accompanying content. Alternative text should always be provided for such content. If the image is rendered as an `img` tag this text should be supplied in the `alt` attribute (`<img src="/path/to/image" alt="description of image">`). If the image is rendered as a background image, or some other CSS-based method, the alternative text should be provided in an element visually hidden in the browser but still available in the DOM flow (and therefore the accessibility tree). In Manifold we have created a class called `screen-reader-text` which accomplishes just this. We also have a convention of using a `span` tag for such elements (i.e., `<span class="screen-reader-text">Text visible to the screen reader</span>`).

#### Interactive

In Manifold, interactive images are often buttons or links (or other elements made interactive through JavaScript) whose only content is an image or icon. And while using clear bold iconography can often streamline UX, such interactions tend to hamper AT if they are unadorned by text. In most cases alternative text should be supplied in the same manner used for content images, for instance `<button class="fancy-icon-button">Text describing interaction</button>`.

### Roles

The [role attribute](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties) helps inform the browser and AT how an element will behave. In most cases we can avoid clashes between an element’s role and its [implied semantics](https://www.w3schools.com/htmL/html5_semantic_elements.asp) by using a more appropriate element in its place. Strive to maintain the implicit role of an HTML element as it will function as expected across browsers and AT much more consistently than those elements with roles overriding their semantic (intended) function. In some cases we should add a role attribute to reinforce an implicit role. In other cases, where styled markup and JavaScript logic already exist, the role attribute can provide the browser and AT information about an element’s function that supersedes the function implied by the tag (i.e., when a `span` or `div` is treated as an interactive element). And in some rare cases we use `role="presentational"` to effectively strip an element’s semantic role away (leaving it still “readable” by AT but no longer treated as an interactive element).

### Form Labels

It’s easy to ignore form field labels, or supply descriptive text some other way, or to treat the label tags only as a tool for getting [WTF-forms CSS hacks](http://wtfforms.com/) to work, but AT deeply rely on the presence and strong association of labels with form elements.

A label indicates a field’s purpose, as placeholder text is not always read by screen readers and input types can be too general to be considered adequately informative. Because of this, it is not only vital that the label is present, it’s important that its contents is human readable. For instance, in some screen readers, if you wrap a `select` with a label, the screen reader will read out all of the options as if they were the text description of the `select` field.

It is also important to strongly associate a label to its form field. This is done by assigning a unique id to the form field and using that id as the value of the [`for` attribute](https://www.w3schools.com/tags/att_for.asp) (or in React the [`htmlFor` attribute](https://reactjs.org/docs/dom-elements.html#htmlfor)) on the label. There are also [ARIA attributes that can be used to provide form field descriptions](https://webaim.org/techniques/forms/advanced) to screen readers, and they should **not** be used in conjunction with a label tag, as only one will be read (with the exception of the `aria-describedby` attribute whose value is read in addition to any label text). In most cases an “invisible” label tag can be used instead of an ARIA attribute and is the preferred solution for showing an AT-only label.

### Form Errors and Notifications

We want errors to be read by AT early and often. When feasible, as soon as they are visible on the page (this is usually immediately after a form has been submitted) they should also be automatically read by the screen reader. Subsequently, error messages should be easily identifiable, as unavoidable as possible, and should persist as long as the form is not submittable.

In general form errors on Manifold always appear next to the field with the error. For AT this is not ideal (it’s much more convenient to have all of the errors routed to a single element—like a flash message—all the time), but we can well accommodate this placement by using the role attribute in conjunction with a handful of other ARIA attributes. The `role="alert"` attribute lets the AT know it should immediately read the text in this element when it is rendered on the page. This role also implicitly makes the element a “[live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)” which means AT can tell when there are changes to this area and then make choices accordingly. We affect how/when the contents in the live region gets read (and re-read) by using two other ARIA attributes.

- The [`aria-atomic` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Advanced_Live_Regions) tells AT to read the entire contents of the live region every time any of it is updated.
- The [`aria-live` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Preferring_Specialized_Live_Region_Roles) tells AT when to read the contents of the element, in relation to other live regions, and in relation to any user interactions. The most well supported `aria-live` value is `polite`, which will wait for any pending DOM interactions to finish, also wait for any content already being read by a screen reader to finish, and then read the contents of that live region. In the case of our error messages, we use a value of `assertive`, which will interrupt anything being read and immediately announce the error. This value is not fully supported across all screen readers but will fallback to the behavior of an element with `aria-live="polite"`.

Finally we use the [`aria-describedby` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) to create a relationship between the error text and the form field with which it is associated. We do this so that after the error text is read once (due to `role="alert"`) it will be read again whenever its associated form field receives focus. This is important as it guides the screen reader user through the form as they make corrections (i.e., they don’t have to remember what the errors are when they’re read the first time; they can read them as many times as they need as they re-traverse a form with errors).

### Controlling Focus

[Hijacking focus is surely frowned upon](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#on-focus), not only for web accessibility reasons, as it runs the risk of confusing or displacing the user, but also for any user’s experience. However, used judiciously, [redirecting focus](https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9) can make it easier for a user, especially an AT user, to understand where they are on the page and what interaction is expected of them. In some cases this is as simple as focusing on a the first form field when a form is rendered on the page: this immediately presents the most important interaction to the user (filling out the form) and keeps the user from having to navigate page content that otherwise may not have changed. Sometimes it means controlling the focus using JavaScript in order to maintain a complicated DOM flow. However, sometimes redirecting focus isn’t enough of a provocation.

In the case of interactions that present the user with a disparate element like a drawer, overlay, dialog box, dropdown menu, etc., we not only want to the redirect focus to an element inside the drawer, we also want to ensure that the user interacts with the contents of that element before it is hidden. To accomplish this we’ll use a strategy called a [focus trap](https://github.com/davidtheclark/focus-trap-react) to restrict the user to the active element.

Let’s use the example of a dialog box containing a prompt asking you to “Confirm the deletion of Text X”, with “Yes” and “Cancel” buttons. For the sighted user this confirmation dialog takes over the whole screen. Using a mouse to navigate the page, the user must click “Yes” or “Cancel” to continue. And this makes sense. We want the user to have to make a decision. If this confirmation dialog wasn’t a takeover, the user might click “Delete” and move on, not noticing or realizing they needed to confirm their choice. So, to emulate this behavior on AT, we use a focus trap to restrict focus to only elements inside the confirmation dialog. If the user is tabbing through content, AT will read the prompt and the buttons text over and over until they interact with one or the other button. If we don’t enact a focus trap, AT would allow the user to tab through and then out of the dialog, continuing to traverse the page as normal and, depending on the contents of that dialog, this could have unwanted consequences. So, to reiterate, in this simple example, we will use a focus trap to ensure that when a user activates the confirmation dialog they won’t miss the messaging, and they will be required to interact with it before moving on, just as a non-AT user would do. Not all uses of the focus trap are so simple, but the [react-focus-trap component](https://github.com/davidtheclark/focus-trap-react) we use offers enough options and flexibility to implement it effectively without too many concessions.

One important consideration when using a focus trap: if we’ve trapped focus inside a dialog, drawer, etc., we must provide them with an interaction to escape the trap. In most cases we can provide a default “press esc key to close,” but this should be used in addition to an “on screen” interaction. Usually we provide a close button inside the focus trap to allow the user to escape the trap without having affected any other change. In some cases we only need to make this close button available to AT as some other click-based interaction is otherwise available.

### Nav Skip

In the most basic sense, AT reads the page from top to bottom every time the page loads. This can hamper UX on a screen reader as it might force a user to traverse the same content over and over as they navigate between pages. In addition to simply tabbing through content, most AT will sort page content in enough different ways to allow the user to access whatever part of the page is most relevant to them. However, we want to encourage users to easily access the most relevant content as quickly and intuitively as possible even if they are only using the tab key to navigate the page. So, we supply anchor links to [let the user skip any redundant page content](http://www.jimthatcher.com/skipnav.htm). In fact, we’ve created a [React component](https://github.com/ManifoldScholar/manifold/blob/master/client/src/components/global/Utility/SkipLink.js) to do just that. The placement of this anchor link should be immediately before the skippable content.

## Glossary

### ARIA

ARIA stands for Accessible Rich Internet Application and it is generally used to refer to HTML attributes that define how AT treats that element. This behavior can range from what contextual information is read along with the element contents, to the order by which content is traversed, to AT-only after effects to DOM interactions, to providing competing, non-semantic, labels, button text, etc. However, like any newer or more experimental browser feature, care must be taken to avoid using attributes that are not yet fully supported across popular screen readers.

### Assistive Technology (AT)

Assistive Technology is any type of equipment or system that improves the functional capabilities of those with disabilities. For our purposes, it describes any such technology or software that interfaces or augment a browser-based experience.

### Screen Reader

A screen reader is a type of AT that uses a text-to-speech (TTS) engine to translate on-screen information into speech, which can be heard through earphones or speakers, or into to braille, with the addition of a refreshable braille display. It is usually a software application native to the computer’s operating system, but [several browsers offer screen reader extensions](http://www.hollier.info/browserpairing/).

### Web Accessibility

Web accessibility refers to the inclusive process of removing barriers that prevent interaction with, or access to, websites by people with disabilities. Broadly speaking, the goal is for all users to have equal access to any information and functionality a website might have.

### Further Reading

One term I kept coming across in my research was “universal design.” Roughly, this is a design approach predicated on creating products, environments, content, etc. that is inherently accessible to everyone and anyone. For the web this definition is a tad narrower, but the principles hold true regardless:

- [Online Book with in-depth look at universal design, development, and content creation](http://universalusability.com/access_by_design/index.html)
- [Slightly dated list of books related to the intersection of universal design and web accessibility](http://www.uiaccess.com/books.html)
- [Organization that more or less coined the term universal design](http://universaldesign.ie/)
- [Educational organization concerned with web accessibility and universal design](https://www.interaction-design.org/literature/article/learn-to-create-accessible-websites-with-the-principles-of-universal-design)
- [Presentation from UW Design School about web accessible design](https://www.washington.edu/doit/universal-design-web-pages)
- [Google also has opinions about web accessibility best practices](https://developers.google.com/web/fundamentals/accessibility/)

—Blake Mason, Frontend Developer, Cast Iron Coding

