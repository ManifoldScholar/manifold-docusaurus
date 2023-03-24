---
id: word_mammoth
title: Ingesting Word Documents
sidebar_label: Ingesting Word Documents
---

Manifold is able to create a Text from a number of a different source formats. Generally speaking, nothing special is required for that transaction to take place: you select a file in one of those accepted formats (EPUB, HTML, Markdown, DOCX, Google Doc), ingest it into Manifold, and the system creates a Text from it.

Sometimes, however, there is something lost in the translation from the source document to Manifold, especially for formats dependent on proprietary systems like Google and Word. Maybe all the paragraphs look like one another when they shouldn’t, or perhaps the alignment of certain elements is not what you had hoped. What the hell? You had everything looking exactly how you wanted it in your original source document. *Why do you task me, Manifold, WHY!?*

This page will hopefully help you out, providing some background for why you are seeing what you are, and describing how you can leverage existing functionality in both Word and Manifold to allow for a successful and representative translation of your Word Documents into Manifold Texts.

:::info What about Google Docs?
The features and strategies discussed here unfortunately do not apply to Google Docs. There is currently no way to map styles from Google into Manifold. Sorry!
:::

:::location Where does all this happen?
This is a rather long page, so for quick reference, the views in the Manifold backend where this all takes place are accessed by selecting **Settings** from the backend menu and then **Ingestion** from the submenu. That view can ***only*** be accessed by folks who have an Admin account.

Also considered is the **Styles** sidebar menu view, accessed by selecting **Texts** from a Project’s sidebar, then a specific Text, and finally **Styles** from the sidebar. Anyone who can access the Manifold backend and modify a project, will be able to access the Styles sidebar.
:::

## Who Is This For?

Are you standing as the sole support person on your team or institution, working to help your colleagues get their content into Manifold? Are some of your colleagues not as comfortable with technology as you wish they were? And despite all that, are you wanting to provide your people with the means to exert a fair degree of control over how their materials look and feel in Manifold? Do the words ***template*** and ***standardized process*** kindle a little joy in your heart?

If some or all of that is true, then this page is very much for you! You might be a digital services librarian or a journals production editor, you might maintain an instance of Manifold yourself or be one group of many using a Manifold instance maintained by a larger umbrella entity. You might even be an independent user who favors Word and wants to make the most of its relationship with Manifold.

This page is long, but bear with us—the work described here, while a bit of a slog at the start, is very much intended to make your life easier, your work more efficient, and your Word ingestions both more nuanced and consistent.

## Considerations

As a general underpinning to this entire section, it is imperative to remember that every text that is brought into Manifold is first converted to HTML. HTML is the language of Manifold and the best lens to understand why it works as it does.

Next, in order to make the most of your Word ingestions, there are several things you will need to do:

- apply paragraph and character styles in Word,
- map those Word styles to HTML attributes (read: “HTML styles”) in Manifold, and
- use CSS in Manifold to have those styled elements render in the browser the way you would like.

If you’re reading that and thinking ***Yikes!***, don’t freak out. Each of those points will be considered at length on this page, and we’ll be supplying you with a style map, Word template, and a stylesheet (that’s the CSS) here to get you started. But it is important to note some frictions you will encounter right here at the beginning.

While each of those three items we just listed are all interrelated ***and necessary***, one is more frustrating than the rest. Mapping Word styles to HTML attributes is something ***only*** an instance Admin can do. So if you aren’t an Admin on your instance, you will need a friend who is. But that’s okay: it’s good to make new friends, right?

Some of you reading this likely work on a shared Manifold instance. And you might be wondering now if you need to magically find a way to get a wide swath of your people all working with the same styles, consistently—and with the same general set of expectations 🙃. Thankfully, no! We will think through some strategies here that will allow you to enable different style mappings and renderings for different groups on your instance. So don’t fret, we’ll get to those in short order. Now, onward!

## Workflow

If this is your first time through, it may seem like there is a chicken-egg dynamic at play here. But be assured that once you get the pieces in place, there is a definite process that flows logically from ***A*** to ***B***. That final, polished workflow will look something like this:

1. An author composes their material in Word, ***using*** Word styles to give structure to their document.
2. Someone—maybe it’s the author, maybe it’s a project manager, maybe it’s you—ingests the Word file into a Manifold Project.
3. Manifold, during the ingestion process, transforms the paragraph and character style in the Word document into HTML attributes—using the style map discussed on this page—and then Manifold applies its Global Ingestion Styles (again, the CSS noted above) to that document, so that all those carefully styled elements from Word render in Manifold as expected.

It’s important to note that step 3 is something ***you*** don’t need to actively participate in each time. Once you have the style map and the stylesheet set up, that all happens automatically as part of the ingest. The real work is about finding ways to make a success of step 1.

## 1. Styling Word Documents

Let’s be candid, styling Word documents is where your real struggle with this process is going to happen. Most folks you are going to deal with learned how to use Word, and word processors more generally, by embracing the “what you see is what you get” (WYSIWYG) mentality and corresponding set of features, which app designers created to make it easier for everyone to use their software. But WYSIWYG is a mirage that obfuscates the truth. It gives you a false impression of what you are actually doing to the text you are adjusting, and it confuses structure with rendering. Bear with us for a moment.

- Open a Word document you’re wanting to load into Manifold, making sure you are in the **Print Layout** view (you can confirm this in the **View** menu).
- Now, from the **Home** menu in the ribbon, select the button for **Styles Pane**. It should be a little right of center. When you click that, you should see a sidebar slide out from the right of the application with a listing of different styles.
- Look to the bottom of that sidebar. There should be two checkbox options. Click on the top one: **Show styles guides**. The styles sidebar on the right side of the screen will now include numbered blocks next to each style listing, each differently colored to help distinguish one from another. And you should likewise see colored blocks with numbers to the left of each of the paragraphs in your document.

Okay, good. Now here’s the kicker. Ready? It’s time to clear the mirage away: Paragraphs that share the same color and number, regardless of how you have manually adjusted their formatting (left-aligned or centered, differently indented, etc.), are all interpreted by computer systems as being the same kind of paragraph, regardless of how they look. That means that any adjustments you manually made, to change how paragraphs of the same style show on the screen, are purely local overrides that ***only*** exist in Word. When you export from Word or convert a Word file into a different format, those formatting overrides you likely spent a good deal of time working on—yeah, they get discarded as if you never did them.

*That . . . sucks, . . . so what now?* Good question! Now you start using those styles you see in the sidebar to compose (or “describe” or “code” or “structure”) your document. Why? First, because it actually requires a lot less time than manually futzing with formatting. Really! Second, because those styles can be made to persist and serve as targets for stylesheets. If that second point makes all of zero sense, don’t worry, it will shortly. We’ll get there together! Follow along, friends, we’re getting to the good stuff!

But first, let’s recap. In Word and other WYSIWYG applications, formatting tools like the ruler and the various buttons to select alignment, font weight and size, etc. are all concerned with how content renders or appears on the screen. Styles, however, are concerned with structure. What something looks like versus what something is—that’s the thrust of the difference.

When authoring new content in Word, the best practice is to use styles to describe different kinds of paragraphs, because we want to tell the computer what each paragraph is and how it functions within the text as a whole. Contrast that with using formatting tools to change how paragraphs look and then relying on a sighted human reader to understand what each paragraph is, based off its appearance.

:::info Wait, What about all my italics?! Are they jettisoned too?
Happily, your existing use of italics and bold and super/subscript is safe. Those stylings affect “runs” of text ***within*** a paragraph and persist even when paragraph stylings do not. We’ll talk more about this below in the **[Character Styles](#character-styles)** section.
:::

:::tip Our Word Template
We promised a Word template above that you can use in your work. <a href="/downloads/manifold-template.docx" title="Manifold Word Template" download="manifold-template.docx">Here it is!</a> As we begin to move into the next steps, that will be handy for you to have.
:::

### Applying Paragraph Styles

Okay, so, still have your Styles sidebar open in Word? Good! Here’s how to apply one of those styles to a paragraph. Put your cursor in a paragraph you want to style—it doesn’t matter where in the paragraph, at the start, end, or in the middle. Now, in the Styles pane, select the style you want that paragraph to be associated with. Done. That’s it!

If you are still in **Print** layout, with the **Show styles guides** box checked at the bottom of the Styles sidebar, you should see two things: (1) the name of the style you selected will show under the **Current Style** header in the Styles sidebar. To the right of the style name there will be pilcrow icon (¶), indicating the style you chose was a paragraph (and not character) style. And, (2), in the document’s left margin, a box with the color and number of the style you selected will appear beside the paragraph you styled.

If you need a little more about how to apply styles to paragraphs, Microsoft created a video walk through of this process in their [Word documentation](https://support.microsoft.com/en-us/office/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109 "Applying Styles to Paragraphs in Microsoft Word") that is worth reviewing.

While this all may be somewhat new for you, hopefully the process wasn’t too odd or onerous. In the [Styling in Practice section](../docs/../walkthroughs/word_mammoth.md#stylying-in-practice) below, we’ll delve into what you are actually accomplishing by assigning styles to paragraphs and also add a little complexity and nuance to this process that will hopefully feel as equally comfortable as this.

:::info Back Up, What’s a “Paragraph”?
If you’re wondering what constitutes a paragraph, this is it: a paragraph is everything from the start of a new line until you hit **Return** (or **Enter**) on your keyboard. When you create a new, blank document, the only thing you’ll see is a blank page with a blinking cursor. That cursor is at the start of the very first line. And it is itself the first paragraph. Everything you type until you hit Return is part of that paragraph. If you type nothing and just hit Return, you have two, blank paragraphs. Paragraphs can be blank lines, one or two words, or run from one page to another. A poem? Each line is a paragraph. That’s okay. That’s expected. Have a really long line that you manually broke into more than one line? That’s a no-no. Why? Because you broke the line because of how it looked in Word and not because of how it is meant to function. Don’t do that.
:::

### Applying Character Styles or “Runs”

Character styles are similar to paragraph styles, except they are specific to letters or words ***within*** paragraphs. They don’t describe the function of a paragraph relative to surrounding paragraphs, but instead how a word or a run of words is functioning inside a paragraph: is that word stressed, does this string of words together make up the title of a cited work. Accordingly, both paragraph and character styles appear in Word’s Style Pane.

Applying character styles very much mirrors the application of paragraph styles. The main difference is that instead of simply putting your cursor somewhere in the paragraph you want to style, for character styles you have to specifically select (read: highlight) the letters and words you want to style with either your mouse or keyboard. Once you have done so, go to the Style Pane and choose the character style you want to assign to your selection.

Once you’ve styled a run of text you can expect to see two things: (1) in the Style Pane, beneath the **Current style** heading you will see the name of the style you selected. To the right of the name you will also see a lowercase, underlined letter _a_, which indicates that you have selected a character style, instead of a paragraph style. And (2), in the left margin of the document, a colored box with the number associated with the character style (from the Style Pane) will appear beside the lines where the run of text you styled appears. If you have also styled the paragraph, the character style box and number will appear just to the right of the paragraph style and number.

Note that in order to see those elements, you need to still be in **Print** layout, with the **Show styles guides** box checked at the bottom of the Styles sidebar.

Again, pretty easy, but there is one annoying thing about this process. Word isn’t great about indicating in the Style Pane which styles are meant for paragraphs and which are meant for characters. If you select text in a paragraph and then choose a paragraph style in the Style Pane, you’ll end up changing the style of the paragraph instead of styling the specific text you had highlighted. Yeah—that’s pretty annoying, but not the end of the world.

In the next section we will add some nuance to this process and discuss more about what it is to use paragraph and character styles in practice as you are composing your document.

### Understanding Styling

We’ve spoken a good deal on this page about the difference between using formatting tools to change how content in Word looks, versus using Styles to actively name different pieces of content. In this section we’re going to center our understanding of styles around two aspects of style application that will help inform your work when using them to structure documents: efficiency and specificity.

When you use Word styles, you are classifying a certain part of the text. You are saying that ***this*** paragraph is a quote, ***this*** other one is a heading, this run of text is a term in a different language than the majority of the text or that it’s the title of a citation. And when you do that, whether you are in Word or later in Manifold, you can control all the attributes of every instance of that Style from one place (the **Style Menu** in Word and a **CSS** in Manifold).

*Classifying parts of the text. What does that mean, really?* Right, let’s get into some of the nitty gritty. Let’s consider a run-of-the-mill body paragraph, styled as **Normal** in Word. If you have never actively used Word styles before, it doesn’t mean your documents haven’t included styles. In fact they all had at least one, **Normal**, which is the default body paragraph style that Word assigns to every paragraph, unless you manually change them.

So let’s say your document is only one paragraph, styled as **Normal**. When you transform the document to HTML (remembering back to the start of this walkthrough that HTML is the language of Manifold), either as part of an export from Word or by ingesting it into Manifold, that paragraph will be encoded into HTML with `<p>` tags, like this:

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.</p>
```

Those `<p>` tags that surround the paragraph are how default body paragraphs are described in HTML. A few things to notice about that:

- HTML is plain text, which means that, for example, bold or italics or hyperlinks can’t be conveyed in the ways you are used to seeing them, with a heavier font weight or slanting text or underlined words. Those sorts of things require that the affected passages be enclosed within their own respective HTML codes. This sample here didn’t include those kinds of elements, but we’ll get a sense for how they operate in HTML a little later in this page.
- Any manual formatting overrides that were made to this paragraph in Word are in no way represented here. Alignment, indent, size, and so on—those adjustments live only in Word. The only information about this paragraph that was conveyed from Word through the conversion to HTML was its style (Normal), which was mapped (by Manifold) to those `<p>` tags.
- The appearance of this paragraph is immaterial in this space. In HTML, it’s the structure that is important, the `<p>` tags. That is the crucial take away here. We really can’t stress it enough. That said, web browsers come pre-packaged with instructions for how to render certain HTML elements on the screen. The default rendering for a basic body paragraph like this is, well, pretty basic: think default system font at 16-point size with no ident and a little space above and below. But it’s very easy to change those rendering attributes, so your basic body paragraphs display in a way that is more appropriate for your material.

Now let’s take a look at what happens when we use a different paragraph style. The example we just considered utilized one of Word’s built-in styles. But there will be occasions when Word may not have a ready-made solution for our situation, and we need to use a custom paragraph style. A simple possibility might be for an author biography, which is usually not a standard body paragraph, but one that is set apart from the main flow of text. We’ll cover how to create a custom style below in the [Customizing Styles section](../docs/../walkthroughs/word_mammoth.md#customizing-styles), but for the moment, let’s assume we have successfully created a style in Word named **Bio** that we intend to use for author biographies. When bringing the Word document with a paragraph styled **Bio** into Manifold, it will be coded in HTML like this:

```html
<p class="bio">Lorem Ipsum dolor sit amet, adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.</p>
```

The thing to notice here is that `class="bio"` attribute in the opening `<p>` tag. That tells us a few things. First, this is still coded in HTML as a paragraph (designated by the `<p>` tags), versus say something more specialized like a heading or a table or a list. Second, this is a special kind of paragraph, one that has been assigned a specific class, `bio`.

In HTML, classes serve as a means to target specific content for a variety of reasons. For our purposes here, the most likely reason we will want to target a specific paragraph, or more accurately, specific kinds of paragraphs, is so that we can adjust how they render on the screen (by way of a stylesheet that we can save in Manifold). Consider our examples here. We have a standard body paragraph coded with just `<p>` tags, and we have a paragraph that has a class of `bio`. Both are paragraphs, but one is a specific kind of paragraph. If on our stylesheet we decided that all paragraphs should have a first line-indent, so we can easily track new paragraphs as we read, then that indent would apply to both of our sample paragraphs equally. But maybe we don’t need for the bio paragraph to have a first line indent. Because it has it’s own class, we can add another instruction to our stylesheet that says elements with a class of `bio` ***don’t*** have a first-line indent.

Taking a half-step back, that `bio` class attribute in our second example is possible because Manifold can map Word styles to existing HTML elements. In this case, the Word style **Bio** was mapped to an HTML paragraph of the class `bio`. That’s what’s really nifty: users with Admin roles can define the specifics of how Word styles are mapped to HTML in Manifold to really get the results they want. If there were no mappings defined, then this second paragraph would have been transformed to a basic HTML paragraph without any attributes—just the `<p>` tag without a class designation—despite having a Word style associated with it. So the [style map](../docs/../walkthroughs/word_mammoth.md#mammoth-style-map), discussed later in this section, is crucial to this process. For the moment, we just want to remember that with a style map, we can line up Word styles with specific HTML elements in ways that we can target.

You might be wondering what other elements in HTML we are likely to want to map to beside paragraphs. HTML has a lot of elements, but many (most) of them are not meant or useful in digital publishing. The ones you are likely to require will be for headings, block quotes, figures and captions, lists, and tables.

Each of of those elements have different tags associated with them. For those curious about learning more about HTML, the [MDN web documentation site](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) has a list of all HTML elements and brief description for each. But you don’t need to be an HTML expert to do this. What is important for you to understand is that using styles in Word to describe how content is functioning also gives you the means to target that content once it lands in Manifold and change how it appears on the screen.

So we can understand styles as a way to intentionally describe the structure of a document and to then leverage that structure as a mean to target specific elements so they render in ways that make sense for the material. On both counts you are enabling reader comprehension and understanding. A lot of folks who don’t use styles often find themselves doing the same formatting operations over and over—type a heading, make it bold, make it bigger. Use the ruler to see off a blockquote, futz with tabs to get the indent ***. . . just . . . right***. With styles, you can give up that nonsense. You simply assign the style and then you can modify how every instance of content with that style appears on the screen. The [Customizing Styles section](../docs/../walkthroughs/word_mammoth.md#customizing-styles) later on this page will delve more into the ***how*** of all of that, but for here it is important to remember that the styles approach is not only best practice, it will help you save time and make your work more consistent.

### Styling in Practice

Okay, we have a sense now for how to apply styles while working in Word and how those Word styles transfer over into Manifold. Now we can zero in on the subtle art of actually choosing the appropriate styles with which to structure our document.

There are a couple general recommendations to keep in mind as you begin this work:

- You want to choose styles that accurately reflect what the content is and avoid choosing styles because of how they look on the screen.
- When possible, use Word’s built-in styles. Word won’t always have everything you need, but with the standard Word styles and those we’ve included in our template, you will have more than enough for a good start. Exhaust those options before considering adding new, custom styles.

With those in mind, we can begin to approach our document with purpose. Each of the following sections will explore different components of a document in turn, with a list of styles you can use that are found in Word or are a part of the supplied Word template. Each list entry begins with the name of the style as it appears in Word followed by some considerations for its application. That said, it is worth remembering that the style list discussed below is not meant to be an exhaustive compendium; it is instead intended to get at the most common concerns without being horribly overwhelming.

#### Structural Elements

Let’s first look at the major structural elements you are likely to have: title, subtitle, author byline, abstracts, headings, block quotes, lists, and biographies. These are low hanging fruit with straight forward and obvious style choices.

<dl>
  <dt>Title</dt>
  <dd>Apply this style to the main title of the document, as it appears at the start of your document. Avoid including your document’s filename in the actual document or applying this style to it. (e.g., <b>chapter1.docx</b>).</dd>
  <dt>Subtitle</dt>
  <dd>This style is used for the document’s subtitle. If you would prefer to have your subtitle and title on one line (in one paragraph), separated by a colon, then there is no need to use this style; just use the title style.</dd>
  <dt>Author</dt>
  <dd>The author byline style can be applied to one paragraph with multiple names separated by commas, or it can be applied to a series of paragraphs, each paragraph containing an individual name. If you are including affiliations with each name, opt for the latter, with each name as its own paragraph.</dd>
  <dt>Abstract</dt>
  <dd>You can apply this style to the first and any following paragraphs that are part of the abstract. The first abstract paragraph will have no indentation; any following abstract-paragraphs will have a first-line indentation.</dd>
  <dt>Epigraph</dt>
  <dd>Using the supplied template, each epigraph is expected to be only one paragraph followed, optionally, by an attribution. If you have multiple epigraphs, each paragraph styled as an epigraph should be followed by an attribution. Epigraphs (and their attributions) should appear before the first body paragraph and not after headings.</dd>
  <dt>Attribution</dt>
  <dd>Use the attribution style to provide a source to an epigraph. The expectation is the attribution will immediately follow an epigraph and will only require one, brief paragraph.</dd>
  <dt>Heading 1</dt>
  <dd>Headings carry semantic information about the structure of a document and how content is organized and partitioned. Headings should always be nested in order—a paragraph styled as Heading 1 should always be the first heading you use, when headings are required. Ideally headings appear in pairs or greater, meaning if you have one paragraph styled as a Heading 1 you should have at least one other heading at that level later in your document. If not, you may want to consider using a paragraph with a line space preceding it (styled Linespace-P) instead of a heading. Use this style for the headings associated with notes and bibliography/reference sections.</dd>
  <dt>Heading 2</dt>
  <dd>Headings that are nested under a first-level heading (styled Heading 1) should be styled as Heading 2. Ideally there should be at least two such second-level headings nested under a first-level heading; otherwise a paragraph with a line space preceding it (styled Linespace-P) may be more appropriate.</dd>
  <dt>Heading 3</dt>
  <dd>In situations where third-level headings are required, they should be nested within a section that begins with a second-level heading (Heading 2) and appear in pairs or greater, styled as Heading 3. If you only require one heading within a section the begins with a second-level heading, consider instead a paragraph with a line space preceding it (styled Linespace-P). For proper nesting, you should always encounter, moving backward from your Heading 3, a second-level heading before you encounter a first-level heading. If you require more than three levels of headings, consult with your Manifold Administrator to explore options. In almost all cases outside of textbooks, three levels of headings should be sufficient. And textbooks may be better served with a different approach than delving further down into later heading levels.</dd>
  <dt>Quote</dt>
  <dd>The quote style is to be applied to paragraphs that are situated as block quotes (or extracts). This style can be applied to a stand-alone quote, meaning a single paragraph that is the entirety of the quote, or it can be applied to a series of consecutive paragraphs that are all being quoted from the same source. In either case, the first paragraph of the quote will have no first-line indent; all subsequent quote paragraphs will. Attribution should be given either via a Word endnote or as in-line parenthetical. The attribution style should not be used with the quote style.</dd>
  <dt>List Bullet</dt>
  <dd>You are going to be tempted to use Word’s text formatting options in the ribbon for bulleted (and numbered) lists. Please avoid that inclination. Using those formatting options will style both bulleted and numbered lists the same; they will only differ in appearance, which we now well know will not transfer out of Word. Instead use the Style Pane to apply the List Bullet style to paragraphs that are to be bulleted list entries.</dd>
  <dt>List Number</dt>
  <dd>See the <b>List Bullet</b> definition above. For numbered lists, use the Style Pane to apply the List Number style to paragraphs that are numbered list entries.</dd>
  <dt>Bio</dt>
  <dd>The Bio style can be applied to one or successive, self-contained paragraphs that serve as author biographies. This style is not intended for a single biography that runs multiple paragraphs. The author name should be run into the body of the paragraph and not set off as a heading of its own.</dd>
</dl>

#### Body Paragraphs

The next layer of styles to consider are those that affect the bulk of the document: all the body paragraphs. If you are adding styles after having written the text, which is usually how it goes, we generally recommend tackling these body elements after the larger structural ones, as it will help bring into relief the choices you will need to make for the remaining elements of the document.

<dl>
  <dt>First-P</dt>
  <dd>Often, the very first <em>body</em> paragraph of a document has special spacing and stylistic considerations that make it useful to assign it its own style. This style should only be applied once per document. There are no scenarios where you would need to use this style more than once.</dd>
  <dt>Normal</dt>
  <dd>This is the default paragraph style in Word, and it serves to describe your default body paragraph. In most situations you will not need to assign this style to a paragraph; instead, you will mostly be looking for paragraphs styled as Normal that need to be differently styled.</dd>
  <dt>Continue-P</dt>
  <dd>Remembering from above how we can think of paragraphs as terminating each time we hit <b>Return</b> (or <b>Enter</b>) on our keyboard, we then have to consider how to deal with paragraphs that are interrupted, say by an extract or an illustration, and then continue on. In those scenarios we are forced to terminate the paragraph, place the quote or illustration as their own paragraph, and then pick up with a new paragraph that is, really, a continuation of the one prior to the interrupting content. And that is the purpose of this particular style. It is to be applied to paragraphs that are continuations of paragraphs that were started and then interrupted.</dd>
  <dt>Linespace-P</dt>
  <dd>This style is to be used when you want to indicate a shift in tone or subject and want to employ a line break to indicate as much. This style should thus be applied to the paragraph you want the line break to appear before or over. This structure is useful for when you have a section where titled headings aren’t suited.</dd>
</dl>

#### Scholarly Apparatus

These three styles are involved in your document’s notes and bibliography sections. Fortunately, Word actually takes care of the notes well enough on its own, which means you only need to intentionally style your bibliography or reference entries. That said, there are two important caveats about working with notes:

- Use Word’s built-in Endnote feature. Do not manually insert notes, hardcoding in superscript numbers and then adding the note text at the bottom of the document. Instead use the **Insert Endnote** tool in the **References** section of the ribbon. That will link the note reference that appears in the text with the content of the note body that will show at the end of the document. It will also automatically update note numbers if you need to add or remove notes during your drafting of the document.
- Your notes need to be inserted as **endnotes** and ***not*** footnotes. So, before ingesting your document into Manifold, make sure you are using endnotes, and if not, then [convert your footnotes to endnotes](https://support.microsoft.com/en-us/office/convert-footnotes-to-endnotes-ccfd96a0-e26a-4edc-b5ec-7e1a1acd739e).

<dl>
  <dt>Endnote Reference</dt>
  <dd>When you insert an endnote into a Word document, the superscripted marker in the text (usually an arabic number) is automatically styled as an Endnote Reference. That is as it should be. There is no need to change away from that style. Just let Word do it’s thing here. As any FYI, this is also our first character style that we have discussed in detail so far.</dd>
  <dt>Endnote Text</dt>
  <dd>The other half of the process for inserting endnotes is drafting the actual content of the note. When you insert an endnote, Word will automatically inject an endnote reference in the body of the text and then open a pane for you to compose the note body. That note body paragraph will be automatically styled as Endnote Text. That’s perfect. There is no need to adjust away from that.</dd>
  <dt>Reference</dt>
  <dd>Word does all the styling work for endnotes, but it leaves you to style your bibliography (or reference) section entries. Once your bibliography is complete, you can select it will with your cursor and then select this style, styling all of the entries in one go. Doing so will not upset an internal character styles you’ve used to describe the names of works.</dd>
</dl>

#### Artwork

When Word exports figures or images, it does so in a way that is semantically correct, but it does so in a way that is more limited than you would want: the HTML encodings are as they should be for the figure itself and for any alt text that has been added in the application (Picture Format menu, then Alt Text in the ribbon). However, the export does not include any text that has been added using Word’s **Insert Caption** feature, meaning any caption you saved with that functionality won’t actually appear in the export. Likewise, and more likely, if you simply include a line of text that you know to be the caption following the image in Word, it will be exported as a standard body paragraph. With the styles below we can properly map captions to the appropriate HTML structures as well as add some nuance so we can distinguish between those images that should be left, center, or right aligned.

:::tip Styling Images
To apply styles to images, select the image itself as it appears in Word, using your mouse or cursor, and then apply the style from the Style Pane. Alternatively, you can place your cursor on the same line beside the image and then apply the style. Either way works equally well.
:::

<dl>
  <dt>Fig-L</dt>
  <dd>This is the style to be used with left-aligned images. The image will be set in Manifold on the left, with text flowing around it on the right, depending on its width.</dd>
  <dt>Caption-L</dt>
  <dd>To be paired with <b>Fig-L</b>, this style designates a paragraph as being the caption to a left-aligned image and will appear beneath the graphic in Manifold with appropriate spacing and styling.</dd>
  <dt>Fig-C</dt>
  <dd>For images that are meant to be centered, this style allows an image to take up width of the text box in Manifold. Depending on the graphic’s size it, there may be an equal amount of white space on the left and right of it, such that it is centered relative to the body text.</dd>
  <dt>Caption-C</dt>
  <dd>To be paired with <b>Fig-C</b>, this style designates a paragraph as being the caption to a center-aligned image and will appear beneath the graphic in Manifold with appropriate spacing and styling.</dd>
  <dt>Fig-R</dt>
  <dd>For right-aligned images, this style will set the image on the right side of the text box in Manifold with text flowing around it to its left, depending on its width.</dd>
  <dt>Caption-R</dt>
  <dd>To be paired with <b>Fig-R</b>, this style designates a paragraph as being the caption to a right-aligned image and will appear beneath the graphic in Manifold with appropriate spacing and styling.</dd>
</dl>

#### Tables

In most cases, the information built into a table is better conveyed and understood through prose text. Be that as it may, you are likely going to encounter tables in your work. Word does okay by tables, but there are limits, and our recommendation is that if you must have tables, it is far far better to keep them on the simpler side. Currently a lot of the nuance around accessibility concerns is not possible with Word’s offerings. As such we offer here only three table styles that address a table’s title, cells that function as column heads, and for standard table data cells.

<dl>
  <dt>Table Title</dt>
  <dd>A table’s title precedes the body of the table itself as its own paragraph and often includes a number (e.g., “Table 1”) followed by a short description of what the table addresses in sentence-style capitalization. This style will be render bolder than the body text to visually set it off.</dd>
  <dt>tch</dt>
  <dd>This style should be applied to the column headings within the table, hence the title of this style: table column heading (tch). If you require multiple levels of column heads or are wanting to use these for rows heads, the default style map will need to be updated for your instance.</dd>
  <dt>td</dt>
  <dd>The table data (td) style is meant to be applied to standard table cells, or, in other words, those that aren’t functioning as a column heads.</dd>
</dl>

Speaking of tables, the following table provides a complete inventory of every paragraph style discussed here, listed in the first column under the **Word Style** header. Each of these styles are also present in the supplied Word template. The middle column, **HTML Coding**, provides a coding sample, illustrating what those Word styles are transformed into in HTML syntax. The last column, **Container**, indicates if a particular style is grouped into a specific HTML container. For instance, an epigraph, along with its attribution, are grouped into an HTML `<div>` structure that is associated with an epigraph class. This last column will be particularly useful for those who are wanting to adjust how the default style map is functioning and to provide a sample for new mappings.

| Word Style        | HTML Coding                                      | Container                          |
| ----------------- | ------------------------------------------------ | ---------------------------------- |
| Title             | `<h1 class="textTitle">...</h1>`                 | —                                  |
| Subtitle          | `<h1 class="cs">...</h1>`                        | —                                  |
| Author            | `<p class="au">...</p>`                          | —                                  |
| Abstract          | `<p class="abst">...</p>`                        | `<div class="abstract">...</div>`  |
| Epigraph          | `<p class="epf">...</p>`                         | `<div class="epigraph">...</div>`  |
| Attribution       | `<p class="ept">...</p>`                         | `<div class="epigraph">...</div>`  |
| Heading 1         | `<h2 class="ah">...</h2>`                        | —                                  |
| Heading 2         | `<h3 class="bh">...</h3>`                        | —                                  |
| Heading 3         | `<h4 class="ch">...</h4>`                        | —                                  |
| Quote             | `<p class="bqs">...</p>`                         | `<blockquote>...</blockquote>`     |
| List Number       | `<li class="nl">...</li>`                        | `<ol class="number">...</ol>`      |
| List Bullet       | `<li class="bl">...</li>`                        | `<ul class="bullet">...</ul>`      |
| Bio               | `<p class="aubio">...</p>`                       | `<div class="bio">...</div>`       |
| First-P           | `<p class="pf">...</p>`                          | —                                  |
| Normal            | `<p>...</p>`                                     | —                                  |
| Continue-P        | `<p class="pcon">...</p>`                        | —                                  |
| Linespace-P       | `<p class="psec">...</p>`                        | —                                  |
| Endnote Reference | `<a href="#endnote-1" id="endnot-ref-1">...</a>` | `<sup>...</sup>`                   |
| Endnote Text      | `<li id="endnote-1"><p class="en">...</p></li>`  | `<ol>...</ol>`                     |
| Reference         | `<li class="rf">...</li>`                        | `<ol class="ref">...</ol>`         |
| Fig-L             | `<figure class="figl">...<figure>`               | —                                  |
| Caption-L         | `<figcaption class="figcapl">...</figcaption>`   | `<figure class="figl">...<figure>` |
| Fig-C             | `<figure>...<figure>`                            | —                                  |
| Caption-C         | `<figcaption class="figcap">...</figcaption>`    | `<figure>...<figure>`              |
| Fig-R             | `<figure class="figr">...<figure>`               | —                                  |
| Caption-R         | `<figcaption class="figcapr">...</figcaption>`   | `<figure class="figr">...<figure>` |
| Table Title       | `<p class="tabletitle">...</p>`                  | —                                  |
| tch               | `<p class="tch">...</p>`                         | `<td>...</td>`                     |
| td                | `<p class="td">...</p>`                          | `<td>...</td>`                     |

#### Character Styles

We spoke above about how italics and bold and other such character-specific formatting persist when your document is converted from Word into a different kind of format, even when other local overrides applied to paragraphs do not. That’s ***mostly*** true.

When you “style” individual letters or words within a paragraph, you are likely using the text formatting tools in the **Home** section of the Word ribbon. When you export content from Word to HTML (either from Word or by upload into Manifold) that conversion process automatically maps certain formatting effects to semantic HTML tagging:

- italic text is mapped to [`<em>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element "HTML Standard for the “em” element") tags,
- bold is mapped to [`<strong>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element "HTML Standard for the “strong” element") tags, and
- sub- and superscript are mapped, respectively to [`<sub>` and `<sup>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements "HTML Standard for the “sub” and “sup” elements") tags.

Browsers typically render these on the screen as you might expect: `<em>`-tagged content it italic, `<strong>`-tagged content is bold, and `<sub>`- and `<sup`>-tagged content is sub- and superscripted.

However, that’s where the magic ends. If you apply highlighting or colors to different segments of text, if you change the font or its size, those changes will not automatically carry forward into HTML or, thus, into Manifold. Why? In short, either because those sorts of effects don’t have a predefined target in HTML to which they can easily be mapped or Word doesn’t record them in a way that can be mapped.

*Okay, great, so if all I’m doing is using these four kinds of formatting options, I don’t have to change what I’m currently doing then right?* Well, you may still want to do things a ***little*** differently and use actual Word styles (instead of the formatting tools) for ***certain*** runs of text. We just noted that Word’s bold and italic formatting map to ***semantic*** HTML. When Word exports your italic passages to `<em>` tags and your bold to `<strong>` tags, those have meaning beyond just how they appear on the screen. For folks using assistive technology, it’s the tagging that matters, not the appearance. So to ensure your content is as meaningfully accessible to as many people as possible, it’s important to use the correct tags.

*Right . . ., but I know how to choose between italics and bold. Why are we still talking about this?* Because it’s not a choice between italics and bold. Those are just rendering options. It’s a choice between two sets of tags: `<em>` and `<i>` and `<cite>` on one hand, and `<strong>` and `<b>` on the other. Yes, I know we just added `<cite>` in there without a proper introduction but bear with us. As noted, content tagged in `<em>` and `<i>` and `<cite>` typically render as italic on screen while `<strong>` and `<b>` show as bold. But each of those tags carries different meaning to folks using screen readers.

Let’s tease this out a bit by comparing what we get out of Word, using just the application’s formatting tools, against the other tagging options noted here:

- Text formatted as italic in Word gets encoded with `<em>` tags, which, from the HTML specification, indicates that that material is vocally stressed. That’s a pretty common use case, so we’re happy with that. But it’s also pretty limited. When I’m including the name of a book in a manuscript, I know that book title is traditionally rendered as italic text, but we can fairly say that’s not something we would want to necessarily think of as being “vocally stressed.” Hence the `<cite>` tag, which is meant to be used for titles of works. Both render in italics, but each has carry their own distinct meaning beyond that through their coding. And let’s not forget about the `<i>` tag. Again, per the HTML specification, the `<i>` tag is intended to suggest a change in tone or voice or to call out technical terms or terms in languages differing from that of the main body. Think dream sequences, internal thoughts, or remembrances or taxonomic or foreign terms. These passages also usually appear in italics, though they carry an entirely different meaning than other words and phrases that share that same visual definition.
- Now looking at the other pair of tags, text formatted in Word as bold gets encoded with `<strong>` tags. Those tags indicate importance, seriousness, urgency. It’s meant to be used for imperative statements or to signal warnings and alerts. On screen, phrases encoded with `<strong>` tags typically appear in bold. Now let’s contrast that with the `<b>` tags, which also typically renders in bold. Unlike `<strong>`, `<b>` does not suggest extra importance or a different voice or mood. Instead it is more functional, meant to call attention to certain words without imbuing them with more import, like keywords.

So, in terms of practical application, where does this leave us? For the italic side of the equation, we can follow this decision tree:

1. Are these your words that you are personally stressing? Yes? Super, then just use the Word formatting button to turn this italic. If you answered No, then go on to next list item.
2. Is this the title of a work? Yes? Great, use the cite style from the Style Pane. If not, go to the next and last list item.
3. Is this passage you are wondering about diverting in tone from the rest of the surrounding text, as, say, in a dream sequence or by breaking the fifth wall? ***Or***, is this a term or phrase in a different language from the main text or a taxonomic term? If you can say yes to either of those then guess what friend, the `i` style in the Style Pane is what you are looking for! If you have something outside that realm, best ask for help.

And for styles on the other half of the equation, those which normally render in bold, we can use this tree:

1. Is your word or phrase serving as a warning or carrying significant import for your reader? Is there an urgency to its being read? If so, then use the Bold formatting button in Word. If this isn’t quite your case, then proceed to the next and last list item.
2. Do you want to draw attention to your word or phrase without imbuing it with added import? If so then use the `b` style in Word’s style pane.

Before we close out the character style section, this is one last style to consider: **Highlight**. This style, available in the supplied Word template from the Style Pane is meant to be applied to text that you want to highlight for reference, and which will appear in the Manifold reader with a yellow background. This style should be used judiciously. For one, Manifold has its own highlighting tool within the app. For another, the coding of this style, which corresponds to `<mark>` tags in HTML is often not read by screen readers. So if you use it, it should be used only in situations where understanding is not adversely affected if a reader is unable to experience it.

All of the character styles we have discussed here are noted in the following table, along with a sample of how they are transformed into HTML. Note that `<em>` and `<strong>` are not listed because they do not require styles to achieve. Instead those can be secured by using Word’s formatting tools in the ribbon for italic and bold, respectively.

| Word Style        | HTML Coding                                      |
| ----------------- | ------------------------------------------------ |
| b                 | `<b>...</b>`                                     |
| cite              | `<cite>...</cite>`                               |
| i                 | `<i>...</i>`                                     |
| Highlight         | `<mark class="highlight">...</mark>`             |


### Customizing or Adding New Styles

We’ve stressed throughout this walkthrough that how things look in Word (a) doesn’t really matter and (b) won’t translate out of Word as you are hoping. However, we also appreciate that you and the author are the ones who actually need to work in the document itself. So while the specific appearance of elements within the Word document doesn’t affect their later representation in Manifold, it can be useful to adjust how they render in Word so as to make the work in the document more efficient or pleasing.

Thankfully, for both you and us, Microsoft has a page dedicated to [customizing styles](https://support.microsoft.com/en-us/office/customize-or-create-new-styles-d38d6e47-f6fc-48eb-a607-1eb120dec563) on their Office site.

Those instructions will allow you to change how a particular style renders in Word—and only Word. Consider this, you’re using the italics formatting button for runs of text that you want to verbally emphasize. In Word they are showing up in italic text. The **cite** style, which you are using for titles of works is also showing in italics. But maybe you want to be able to more quickly distinguish between them, so you want titles be in both italic and red text. You can do that by editing the **cite** style from the Style Pane. Or you make it so that headings are centered or bigger or smaller than how they are right now in the template. When you make those changes it will affect every instance of that style, so you only have to make the adjustment once. It’s a handy and efficient option to dial in your Word workspace.

Those instructions on the Microsoft page are doubly useful as they also describe how to create a new style, if you find yourself wanting more than what is supplied in the template. Microsoft speaks of creating a style based off existing text. That works perfectly. But you can also just as easily create a style before you employ it. That way to do it is to navigate to the Style Pane and select the **New Style...** button beneath the **Current style** dropdown. That will open up a new dialog box where you will give the style and name and can configure its formatting settings. From whether it is a paragraph or character style to how it renders. Later, in Manifold, you will want to map that Word style to an HTML style and also include rendering instructions for it in the global stylesheet, both of which are discussed later down this page.

### Reviewing Styles

Thus far we have discussed how to understand which styles are being applied in a Word document through the use of the Styles Pane sidebar, specifically in conjunction with the **Show styles guides** setting checked. However, there is another way for you to see what styles are being applied in the document that may be preferable.

This approach first requires that you adjust one of Word’s display settings:

- For PC users, you’ll want to select from the menu **File** and then **Options**. And then from the left pane choose **Advanced**. Look for the **Display** heading and then for a line of text reading “Style area pane width in Draft and Outline views,” which is next to a text box that has a default setting of `0"`. Change that from `0"` to `1"`. If you don’t see that, check the [Office documentation site](https://support.microsoft.com/en-us/office/word-options-advanced-1b3d9436-bc3a-4c5d-a55f-17450e701663). Word has moved this setting over the years in different versions, and that site will help detail other places to look.
- For Mac users, select **Word** from the menu bar and then **Preferences** from the dropdown. Or you can just use the keyboard shortcut `Command` + `,`. Choose the icon labeled **View** and then under the heading that reads **Show Window Elements**, change the field labeled “Style area width” from `0"` to `1"`.

With that done you can now toggle from the default Print layout to the Draft layout, using the respective buttons at the bottom of the application in the lower right, which are situated beside the magnification slider. When you now move to Draft view, you should see on the left side of the Word window a margin that displays the names of the style associated with each paragraph. This makes it a little easier to see directly which particular style a paragraph has, instead of having to look at the code and color in the Style pane. However the one drawback is that it does not list character styles.


### Common Blunders

This section aims to describe some of the more common situations that throw people off while working with styles in Word. This is by no means exhaustive, but as this is living documentation, we will update this space with other issues that are reported to us and that we can extrapolate for a wider audience.

- Converting files between formats or application. Moving a file between applications—Word to Google and back, or worse yet, Word to Pages and back—is likely going to cause you problems, most commonly the loss of style application. Once you start styling a document, it is best to keep it in the same environment from there on out. That said, moving between Mac and PC Word won’t be a problem. Most everything else will be though.
- Using the wrong kind of style. A much smaller misstep, but annoying all the same, is applying a paragraph style to a run of text instead of a character style. This won’t break your file, but it will likely result in unexpected and maybe even unnoticed results: when you apply a paragraph style to a run of text, you will end up styling the entire paragraph, not just the selected text. Which means you may change the paragraph style to something you didn’t want ***and*** the run of text you had intended to style will remain unstyled. This is very much one of those places where Word could do a better job of making the kinds of styles (paragraph or character) much more obvious that it currently does.
- Not finding the style you want. Word’s style pane includes a dropdown labeled “List” below the list of styles. You can use that to configure which styles the pane is showing to you. If you are looking for a style you know should be there but aren’t finding it, select that dropdown and choose a different option from the one you are on. Often times you will be looking at “Styles in use.” If you select “In current document” instead, you should see all the styles your Word file has, even if they aren’t actively being used.

:::caution Beware Add-Ons
For more advanced Word users who enjoy using Field Codes to create linked references or add-ons like Zotero to inject bibliographic data, be sure to convert all of that material to plain, editable text before loading your document into Manifold. Those features pollute your Word file with a lot of content that ***you*** can’t see but which Manifold does. And depending on what you have and how it’s set up in your file, your ingest may not work or you will end up seeing programming code baked into the body of your file when it shows up in Manifold.
:::

***

Okay, at this point you have a Word file that is ready to go. If you have a Global Stylesheet and Style map in place, you’re basically done. You just need to load (sorry, “ingest”) your Word file into Manifold (see below), and voilà, you now have an amazingly well structured and good looking text in Manifold that hopefully shows your source material in the best possible light. For those who need to work through their style map and global style sheet, stay with us, we’re just about there!

## 2. Loading Texts

In the coming months, we plan on writing a walkthrough specific to loading texts. In the meantime, our standard documentation for [**Adding Texts**](../docs/../backend/texts.md#adding-texts) to a project will hopefully suffice.

The main takeaways, beyond the actual process described there, are that you need to have access to the Manifold backend and the proper credentials to edit the project to which you want to load the text. After that, it’s really not much more than finding the right screen and selecting the Word file you’ve now worked so hard on, to load.

## 3. Manifold Ingestion Settings

:::location
This section details options in the Manifold backend that are only available to users who have an **Admin** account. Both the Mammoth Style Map and Global Ingestion Styles options discussed below can be found by selecting **Settings** in the Manifold backend and then **Ingestion** from the submenu.
:::

Here at the end of the road we have one last bump to navigate. Both of the settings we discuss in this section are only available to Admin users. And it is quite likely that some of you reading this are not admins on your instance. The Global Styles settings are important and handy for your work, but because you can adjust styles at the project level, there is a viable path to make those same adjustments in a space you can access.

However, there is currently no alternative means of mapping styles. That can ***only*** be done in this view. This will be an issue for you if you want to adjust how styles are currently mapped on your instance or if you add a new Word style. In either you will need to reach out to a Admin user to have them help you get a mapping in place.

This hasn’t been an issue for folks as yet. Or at least, not within out hearing, but we appreciate it very much could be. As always, we are keen to better understand your experience, so if you find this to be a particularly difficult pain point, do let us know at [contact@manifoldapp.org](mailto:contact@manifoldapp.org?subject=Style%20Map).

### Mammoth Style Map

While it appears further down the page in the Manifold interface than the Global Styles input, for our purposes here it makes sense to consider the Mammoth Style Map first.

And your first question is likely and rightly, What the hell is a ***Mammoth*** style map? Good question. Mammoth is an independent open-source service that Manifold uses to convert Word documents to HTML.

This is the place where you will tell Manifold how to map Word styles to HTML styles (or, rather attributes). If you don’t, then all the hard work you’ve done styling your document will go unfulfilled.

When you first come to this space in the Manifold backend, you are presented with a heading, a simple direction to check out some instructions, and an empty code editor with one line number. Inviting, right?

The link in question, to [Mammoth’s instructions for mapping styles](https://www.npmjs.com/package/mammoth#writing-style-maps), is amazingly handy. But I didn’t think that the first time I saw it. It is written in a way that isn’t exactly approachable for folks not already in the know. So we are going to try to demystify that here. We are’t going to cover every possible situation, but the following should give you the tools to leverage Mammoth’s documentation to meet your needs.

First things first: what follows immediately below is the default style mapping that goes along with our Word template. If you hover over it, a button labelled **Copy** should appear. Click that, and you can then paste this into your instance.

```
p[style-name='Title'] => h1.textTitle
p[style-name='Subtitle'] => p.cs
p[style-name='Author'] => p.au:fresh
p[style-name='Abstract'] => div.abstract > p.abst:fresh
p[style-name='Epigraph'] => div.epigraph > p.epf:fresh
p[style-name='Attribution'] => div.epigraph > p.ept
p[style-name='Heading 1'] => h2.ah
p[style-name='Heading 2'] => h3.bh
p[style-name='Heading 3'] => h4.ch
p[style-name='Normal'] => p:fresh
p[style-name='First-P'] => p.pf
p[style-name='Continue-P'] => p.pcon
p[style-name='Linespace-P'] => p.psec
p[style-name='Bio'] => div.bio > p.aubio:fresh
p[style-name='Endnote Text'] => p.en:fresh
p[style-name='Quote'] => blockquote > p.bqs:fresh
p[style-name='Reference'] => ol.ref > li.rf:fresh
p[style-name='List Number'] => ol.number > li.nl:fresh
p[style-name='List Bullet'] => ul.bullet > li.bl:fresh
p[style-name='Fig-L'] => figure.figl
p[style-name='Caption-L'] => figure.figl > figcaption.figcapl
p[style-name='Fig-C'] => figure
p[style-name='Caption-C'] => figure > figcaption.figcap
p[style-name='Fig-R'] => figure.figr
p[style-name='Caption-R'] => figure.figr > figcaption.figcapr
p[style-name='Table Title'] => p.tabletitle
p[style-name='tch'] => p.tch
p[style-name='td'] => p.td
r[style-name='b'] => b
r[style-name='cite'] => cite
r[style-name='i'] => i
r[style-name='Highlight'] => mark.highlight
```

Now, let’s start digesting what we see here. We’ll start with the entry for a standard body paragraph, styled **Normal** in Word:

```
p[style-name='Normal'] => p:fresh
```

We can break this expression into three components, reading from left to right: (1) naming the Word style, (2) the mapping operator, and (3) the HTML element we are mapping our Word style onto.

1. The first component that names the Word style looks obtuse but is very formulaic. The first element of that expression to notice is the letter ***p*** that starts the line. That tells us that we are dealing with a paragraph style. When we want to map a character style, we would instead use ***r*** in that space, denoting a “run” of text.

   The bracketed expression is boilerplate, and the only thing you need to change is what appears between the single quote marks. That’s where we key-in the name of a Word style, exactly as it appears in Word. If your style name is “NoIndent,” then this first component would be `p[style-name='NoIndent']`. If you have a character style called “red,” then the component would be `r[style-name='red']`. The capitalization and spacing of the style name here should exactly match its name in Word.

2. The second component is the mapping operator, made up of an equal sign followed by a rightward-facing angle bracket, or, if you prefer, a greater-than sign: `=>`. There is no space between the equal sign and the angle bracket, but there should be a space on either side of this overall expression, separating it from the Word style and the HTML element. This operator is required for all mappings.
3.  The final component in the mapping expression is the HTML element we want to transform our Word style into. This is the most versatile and technical component of the mapping, because there are wide range of [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning) to which we can map a Word style, and because we can nest elements. That said, the most likely and common elements you will want will be those for headings (h1, h2, etc.), lists (ol, ul, li), block quotes (blockquote), paragraphs (p), figures (figure, figcaption), and generic containers (div).

Given the complexity of this last part of the expression, let’s take some time to process through it in some detail. We will explore the possibilities in ascending order of complexity.

#### Basic Element Mapping and the Fresh Expression

Looking again at our example, we have this for our mapping expression: `p:fresh`. The ***p*** tells us that we are mapping to an HTML `p` element, which makes sense, since this is a standard body paragraph. For the sake of argument, if we wanted to be goofy and map a basic body paragraph to a second-level heading, then our mapping expression would look like this: `p[style-name='Normal'] => h2:fresh`. Again, that’s bonkers, and just an illustration of how to adjust the HTML element to which you are mapping your style. Please don’t ever map a body paragraph to a heading.

Great, so let’s now examine what’s going on with that `:fresh` modifier. When Mammoth converts a Word document to HTML, it is inclined to collapse information together. Imagine that you have a simple document, three paragraphs long, and all three paragraphs are styled **Normal** in Word and being mapped to a basic `p` HTML element in Manifold. After you ingested that document into Manifold you would be surprised to find only one paragraph waiting for you in the reader. That’s because Mammoth saw three consecutive elements, all mapped the exact same way, and collapsed them into a single unit. Thus instead of this:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
```

You have this:

```html
<p>Paragraph 1Paragraph 2Paragraph 3</p>
```

To avoid that, you need to include the `:fresh` expression at the end of the element mapping. Doing so will prevent consecutive elements with the same mappings from being collapsed into one element.

#### Mapping Classes

We spoke above about how we can use different styles for different kinds of paragraphs: epigraphs, abstracts, biographies, and so on. In the world of HTML, those are all still paragraphs, so they will all be coded with `<p>` element tags in HTML. That’s fine, but we want to distinguish these different kinds of paragraphs from one another. The way for us to do that is to assign a “class” to these different kinds of paragraphs. Let’s look at another example from the provided style map:

```
p[style-name='First-P'] => p.pf
```

Here we are mapping the very first body paragraph, which sometimes get special treatment and spacing, to a class called `pf`. See it there at the tail end of the expression? When we want to assign a specific class to an HTML element, we name the HTML element (here a paragraph element), insert a period, and then include the class name. In practical terms, this results in the following coding in HTML/Manifold:

```html
<p class="pf">...</p>
```

See that our opening paragraph tag has an attribute that names the class we have assigned. If we look again at the mapping template, we can see this playing out in another example:

```
p[style-name='Heading 1'] => h2.ah
```

In this example we are mapping a paragraph styled **Heading 1** to an `h2` HTML element with a class name of `ah` (A-level heading). In code it will show up like this:

```html
<h2 class="ah">...</h2>
```

Classes are important because they distinguish like elements from one another, and they also serve as targets for our stylesheet.

:::info A Quick Sidebar about Headings
Headings play a very important role in the structure of documents, and the expectation is that they be nested properly. This means that heading levels aren’t skipped or chosen purely for aesthetic reasons. The MDN site discusses this in more detail on their [Heading Elements page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements).

That page will help illustrate what is happening in this example. As noted on MDN, your document should have only one `h1` element, and that is reserved for the document’s title:

```
p[style-name='Title'] => h1.textTitle
```

That means that any body-level headings need to begin with the `h2` element. In this example, we borrow from standard publishing convention, which names headings by letter: a-heads are first-level headings, b-heads are second-level headings. Thus the `ah` class name that we see in our example above and why it is associated with an `h2` attribute, even though it is a mapping of the Word style **Heading 1**:

```
p[style-name='Heading 1'] => h2.ah
```
:::

:::caution Naming Classes
Class names should ***not*** have spaces, and they are case sensitive. If you do either one of those, you will have problems with how they appear in the reader.
:::

#### Nesting

Our last topic to consider here revolves around nesting elements. On occasion you may want certain styles to be grouped together in a single HTML container. Think individual list elements. While each is unique, they are meant to stand together as a single unit. Likewise for a figure and its caption: two unique pieces of content that are understood by their association.

For this to work, the pieces of content that are to be grouped together need to be situated immediately adjacent to one another in the Word file. Let’s consider a numbered list of three items. In Word that means we are dealing with three paragraphs, each of which we have styled as **List Number**. When we bring this into Manifold, we want this list to be a cohesive block of content, numbered continuously. To achieve that we need to include nest HTML elements in our style mapping. Let’s take a look at what we have in the template:

```
p[style-name='List Number'] => ol.number > li.nl:fresh
```

The portion to the left of the mapping operator should look familiar. From that we know that we’re mapping a paragraph style in Word named **List Number**. Great. But the mapping on the right is a little more involved. The first expression there, `ol.number`, is followed by another rightward-pointing angle bracket (the nesting operator) and another mapping. The easiest way to understand this is to read the expressions that are separated by the nesting operator as being contained by what precedes them. In this case we are introducing a `ol` (ordered list) HTML element with a class of number that is going to contain the individual list items, which will themselves by mapped to `li` html elements with a class of `nl`. In HTML/Manifold, the coding will look like this:

```html
<ol class="number">
  <li class="nl">List Element 1</li>
  <li class="nl">List Element 2</li>
  <li class="nl">List Element 3</li>
</ol>
```

There’s a lot going on there, so it is worth taking a moment to pause. If you are wondering how or where we got `ol` from and why we would want it to contain the list paragraphs, it is because of our familiarity with the [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning) we mentioned above and how those are all properly expressed in HTML. The more you get a sense for that, the easier this will be. Before we move on, it is also worth noting that we also included a fresh expression in our mapping above. Had we not done that, the three list elements would have collapsed into one:

```html
<ol class="number">
  <li class="nl">List Element 1List Element 2List Element 3</li>
</ol>
```

Now, if you, like us, wanted to group an epigraph paragraph with its attribution paragraph in a generic container, we would achieve that with these two mappings:

```
p[style-name='Epigraph'] => div.epigraph > p.epf:fresh
p[style-name='Attribution'] => div.epigraph > p.ept
```

From that we can see that we are mapping the Word styles **Epigraph** and **Attribution** to HTML paragraph elements with classes of `epf` and `ept` respectively. In HTML/Manifold, this would make this structure:

```html
<div class="epigraph">
  <p class="epf">...</p>
  <p class="ept">...</p>
</div>
```

In both of these examples we have containers (an `ol` in the first and a `div` in the second) that are associated with classes and list and paragraph elements that likewise have classes on their own. That means we have a lot of targets we can take advantage of in our stylesheet. Let’s talk about those now.

### Global Ingestion Styles

Re-centering ourselves, we are in the Manifold backend, looking at the Ingestion Settings, specifically the code editor beneath the heading for **Global Ingestion Styles**. The input area here is expecting a stylesheet from you, formatted in [CSS syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax).

This stylesheet is what tells Manifold how things should appear or render on screen in the reader interface. This is not required by any means. Every browser has default instructions for how to render all of the [core HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). And Manifold also has its own set of defaults for how those elements should display. But if you have gone to through the work of adding style mappings, which have allowed you to add classes so you can target specific content, our sense is you might also want to adjust how those elements you added classes to appear on screen. ***This*** is the place to do that. Once your stylesheet is saved, Manifold will then apply it to ***every*** new incoming text as it is ingested into the system.

That said, you very much have the opportunity to further adjust the styles that get applied to a text at ingest or add new stylesheets to a text after the fact. In our main documentation, we discuss [how this global stylesheet is situated in individual text records](../docs/../backend/texts.md#styles). Being able to futher adjust or add stylesheets to already injested texts will likely be very useful to users who either cannot access this view, because they do not have admin accounts, or for those who are working on a shared instance, where it may not be possible to have a single stylesheet for the breadth of content intended for the instance.

In practice this means you have a stylesheet here that gets applied to every newly incoming text. And if you need to make adjustments, you can drill down into that [text on the project level](../docs/../backend/texts.md) and, using the **Styles** sidebar menu, change how the global stylesheet that is saved to that text is being applied or add an entirely new set of style directions wholesale.

:::tip Same Styles, Different Renderings
We encourage you to use the same Word styles for all of your texts, even on shared instances. Different groups can create different stylesheets for their publications as needed. They will just need to apply them at the text level, so as to add to or replace the sheet saved here. This allows you to have a consistent approach to styling documents and the versatility to adjust those styles to meet specific needs.
:::

It is also worth noting a rather large caveat to how styles are applied with this sheet: Manifold first has to match the styles you include on your stylesheet to the elements within the incoming text. Specificity matters, and when Manifold is unable to match a style declaration to an element of an incoming text, it will simply not style it as you have described here.

For instance, let’s take a look at the heading example from earlier that involved this mapping, where we are transforming the Word style **Heading 1** into a HTML `h2` element with a class of `ah`:

```
p[style-name='Heading 1'] => h2.ah
```

That mapping results with this HTML coding in Manifold:

```html
<h2 class="ah">...</h2>
```

If the global stylesheet you enter on your instance doesn’t have instructions for what to do with something that has a class attribute titled `ah`, then Manifold will style this content according to it’s default style instruction for the core HTML `h2` entity.

Now, how did we arrive at that? When you map content from Word styles to HTML, by default you are creating mappings to HTML elements (p, ol, h1, figure, blockquote, e.g.). All of those elements already have styling instructions for them baked into the system. So in this hypothetical situation, where you have loaded a text that has a heading with a class attribute called `ah` but your stylesheet doesn’t have instructions for that attribute, then Manifold will simply use the instructions for the core element (`h2` here) instead, because it has nothing to match the `ah` class attribute against.

Functionally, this means that even if all you did was map Word styles to core HTML entities, then you still have the opportunity in this backend view to provide directions for how you want those core elements to appear on the screen, instead of relying on the default rendering instructions for those that are baked into Manifold. But if you added additional nuance to your mappings, say by adding classes, you can specifically target those class attributes and provide rendering instructions for them. To look at it another way, without that nuance of class attributes, you could tell Manifold how all `p` (paragraph) elements should appear. Useful, but limited. With classes, you can tell Manifold how ***this*** paragraph should look and how ***this other*** kind of paragraph should look.

Conversely, if you do have instructions for a certain class in your stylesheet, but you cannot define it in your source document or create a mapping for it (yeah, here’s looking at you, Google Docs!), then Manifold won’t be able to apply those styling instructions. In that situation, the stylesheet will only be able to be applied to core HTML elements.

Now let’s actually talk a little about how to compose styling instructions in CSS syntax. CSS is one of those topics that is both approachable and so much more nuanced than you would give it on first glance. Entire books are written on the topic, so we can only do so much here. A good place to start digging deeper will be through the [MDN’s page on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

But, we can get you started with some basics. Let’s look at the style instructions we have in our template for a basic paragraph as our example:

```css
p {text-indent: 1em; text-align:left; margin-top: 0; margin-bottom: 0; line-height: 1.575}
```

First off, see how that is formatted all on one line. That is perfectly acceptable and can be quite useful if you want to save space. However, if you would rather see the different style declarations for an element listed out, that is also perfectly acceptable:

```css
p {
  text-indent: 1em;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.575
}
```

The things to remember are that (1) each line begins with an element or class or other selector (here we have the `p` element), (2) you need to enclose all your style declarations (`text-indent: 1em;` is one declaration) for that element in curly braces, and (3) each style property (e.g., `text-indent`) should separate its name from its value with a colon, and (4) each style value (e.g., `1em`) should conclude with a semicolon. Internal spaces are disregarded. That means that `text-indent:1em;` is interpreted no differently than `text-indent: 1em;`, the latter of which includes a space after the colon.

There are a lot of different style properties. A full list can be found in this [CSS properties reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index). Similarly, there are a [host of CSS values and units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units) you can assign to those properties. Our suggestion is to use our template as a place to get your toes wet and feel for some of the more common styling properties and then to branch out from there.

Getting back to our example, those style instructions will be applied to every element in your text that is tagged with a `p` element. Again, this is why we assigned classes to distinguish different paragraphs from one another. Using an earlier example, we talked about mapping the Word style **First-P** to a paragraph with a class of `pf`, which results in this coding:

```html
<p class="pf">...</p>
```

Now, that paragraph in Manifold will have all of these style instructions applied to it:

```css
p {
  text-indent: 1em;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.575
}
```
It will ***also*** have the following class attributes applied to it. Note how the attribute name begins with a period. Core HTML elements are just named as is; classes begin with a period in CSS.

```css
.pf {
  margin-top: 3em;
  margin-bottom: 0;
  text-align:left;
  text-indent: 0;
}
```

Because these style instructions augment the core element, these will be applied after the previous, core-element instructions. When there are competing instructions, then the value from the class, which has more specificity, will win out. Here we have such a situation. The basic `p` element has an instruction to have a text-intent (read, first-line indent) with a value of `1em`. That makes sense, because for the majority of our paragraphs we will want a first-line indent. But a first paragraph usually doesn’t have a first-line indent. It’s specialized, so in our instruction for the `.pf` class, we have an instruction indicating that the text indent be set to zero. That overrides the general paragraph indent instruction. Same for the `margin-top` values. With a body paragraph you wouldn’t want much space above. But for a first paragraph there is usually a larger amount of space between it and whatever precedes, be that an epigraph or author name, etc.

There are other nifty elements to CSS, like being able to combine selectors, say like this:

```css
h1 + p,
h2 + p,
h3 + p,
h4 + p {
  text-indent:0; margin-top: 0;
}
```

We have two things going on here that we haven’t seen before. First we have multiple selectors being listed (`h1 + p`, `h2 + p`, etc.), and each of those selectors is combinatory in nature, with each selector having a heading and paragraph element that are separated by a plus sign. So how does this work?

First, we can include multiple selectors, separated by commas, before the style declaration block. In situations where you know you want to style multiple elements in the same way, you can do it in one go.

Second, you can combine elements in a selector to very specifically target particular content. Anytime you use a combinatory approach the instructions you provide will be applied to the second element in the expression. Here the style declarations will only be applied to paragraph elements that immediately follow either an `h1`, `h2`, `h3`, or `h4` heading.

Mozilla’s [CSS selector documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) is good place to begin exploring how to use selectors like this to your advantage.

Once last thing to note: you can leave comments in CSS, so if you want to leave notes in the code for yourself or for those with whom you work, you can easily do so. Comments should be set on their own line and begin with a forward slash and a asterisk and close with an asterisk followed by a forward slash, like this:

```css
/* This is a comment. */
```

We close now, with a copy of our default CSS template that you can copy and paste into your own instance. Feel free to add to it and adjust it as suits your needs. This is a place for you to begin. Run with it!

```css
/*Core HTML Elements*/
a {color: #0066cc; -webkit-transition:background-color .25s linear; transition: background-color .25s linear; text-decoration: none;}
a:active, a:focus, a:hover {background-color:#FFFFCC; color: #BF1722; border-top: 1px solid #3b3b3b; border-bottom: 1px solid #3b3b3b; border-radius: .2em; text-decoration: none;}
blockquote {margin: 1.5em 2em 1.5em 2em;}
body {font-size: medium; margin-top: 1em; margin-left: 1em; margin-right: 1em;}
figure {margin: 1em auto 1em auto; text-align:center; text-indent: 0;}
img {text-align:center; text-indent:0;}
ol, ul {margin-top: 1em; margin-bottom: 1em; padding: 0; list-style-position: outside;}
ol.ref {list-style-type: none;}
ol.number {list-style-type: decimal; margin-left: 2em;}
ul.bullet {list-style-type: disc; margin-left: 2em;}
li {margin-left: 1em;}
p {text-indent: 1em; text-align:left; margin-top: 0; margin-bottom: 0; line-height: 1.575}
sub {vertical-align: sub; font-size: 0.675em; line-height: 1.2; vertical-align: 35%;}
sup {top: 0; font-size: 0.675em; line-height: 1.2; vertical-align: 35%;}
table {width:100%; margin-top: 1.25em; margin-bottom: 1.25em; border-collapse: collapse;}
table, td, th {border: 1px solid black;}
td {vertical-align: middle; padding: 2px;}
th {vertical-align: middle; padding: 2px;}
h1 + p, h2 + p, h3 + p, h4 + p {text-indent:0; margin-top: 0;}
strong {}
cite {font-style: italic;}
em {}
mark {}

/*Part and Chapters*/
.textTitle {text-align:left; text-indent:0; font-size: 2em; margin: 1% 0 0 2.5rem;}
.cs {text-align:left; text-indent:0; font-size: 1.35rem; margin-top: .25em; margin-bottom:1%; margin-left: 2.5rem;}
.abstract {margin: .5em 2em 0 2.5rem; }
.abst {text-indent: 0; margin:0; font-weight: 200;}
.abst + .abst {text-indent: 1em; margin-top: 0;}
.au {text-align:left; font-size: 0.75em; margin-top:.35em; margin-left: 2.5rem; text-indent: 0; line-height:1.4;}
.au + .au {margin-top:0;}

/*Epigraph*/
.epigraph {margin:3em 2.5em 0 2.5em;}
.epf {text-indent: 0; text-align:left; font-size: 95%;}
.ept {text-align:right; margin-top:.3em; font-size: 95%; font-style: italic; text-indent: 0;}
.epf + .epf {margin-top: 1em;}
.ept + .epf {margin-top: 1em;}

/*Heads*/
.ah {font-weight:bold; font-size: 125%; margin-top:1.25em; margin-right: 20%; margin-bottom: 0; text-indent:0; text-align:left;}
.bh {font-size: 115%; font-weight: bold; font-style: italic; margin-top:1.25em; margin-bottom:0%; text-indent:0; text-align:left;}
.ch {font-variant-caps: all-small-caps; font-size: 95%; margin-top:1.25em; margin-bottom:0; text-indent: 0; text-align:left;}

/*Body*/
.pcon {margin-top: 1em; margin-bottom: 0; text-indent: 0; text-align:left;}
.pf {margin-top: 3em; margin-bottom: 0; text-align:left; text-indent: 0;}
.psec {margin-top: 2em; text-indent: 0; text-align:left;}
.bio {margin: 3em auto 0 auto;}
h1 + div.bio, h2 + div.bio, h3 + div.bio, h4 + div.bio {margin-top: 0;}
.aubio {text-align:left; text-indent:0;}
.aubio + .aubio {margin-top: .5em;}

/*Block Quotation*/
.bqs {margin: 1em 2em 0 0; text-align:left; text-indent: 0;}
.bqs + .bqs {margin-top:0; margin-right: 2em; margin-left:0; text-indent: 1em; text-align:left;}

/*Notes*/
sup + .enref {font-family: monospace; font-weight: bold; font-size: 0.675em; line-height: 1.2; vertical-align: 35%;}
.en {text-indent:0; text-align:left; font-size: 90%;}
p.en + p {text-indent:0;}
.rf {margin-left: 1em; text-indent: -1em; text-align:left;}

/*Left-Alinged Figure*/
figure.figl {max-width: 50%; float:left; margin-right:1.5em; margin-left:0;}
figure.figl > img {margin-right:0; margin-left:0;}
.figcapl {font-size:80%; text-align:left; text-indent:0; margin: .25em 0 .75em 0;}

/*Centered Figure*/
.fig {text-align:center; text-indent:0; margin-top: 1em;}
.figcap {font-size:80%; text-align:center; text-indent:0; margin: .25em 2em .75em 2em;}

/*Right-Alinged Figure*/
figure.figr {max-width: 50%; float:right; margin-right:0; margin-left:1.5em;}
figure.figr > img {margin-right:0; margin-left:0;}
.figcapr {font-size:80%; text-align:left; text-indent:0; margin: .25em 0 .75em 0;}

/*Table*/
.tabletitle {font-weight:bold; font-size: 90%; text-indent: 0; line-height: 1.2; margin-top: 1em;}
.tabletitle + table {margin-top: .25em;}
.tch {text-indent: 0; vertical-align: middle; text-align: center; font-size: 75%; font-weight: bold;}
.td {text-indent: 0; vertical-align: middle; text-align: center; font-size: 75%;}

/* ----- *** Character Styles *** ----- */

/*Reference/Cross-References*/
.enref {font-family: monospace; font-weight: bold; font-size: 0.675em; line-height: 1.2; vertical-align: 35%;}
```
