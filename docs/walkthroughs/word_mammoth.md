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

Are you standing as the sole support person on your team or institution, working to help your colleagues get their content into Manifold? Are some of your colleagues not as comfortable with technology as you wish they were? And despite all that, are you wanting to provide your people with the means to exert a fair degree of control over how their materials look and feel in Manifold? Do the words *template* and *standardized process* kindle a little joy in your heart?

If some or all of that is true, then this page is very much for you! You might be a digital services librarian or a journals production editor, you might maintain an instance of Manifold yourself or be one group of many using a Manifold instance maintained by a larger umbrella entity. You might even be an independent user who favors Word and wants to make the most of its relationship with Manifold. 

This page is long, but bear with us—the work described here, while a bit of a slog at the start, is very much intended to make your life easier, your work more efficient, and your Word ingestions both more nuanced and consistent.

## Considerations

In order to make the most of your Word ingestions, there are several things you will need to do:

- apply paragraph and character styles in Word,
- map those Word styles to HTML attributes (read: “HTML styles”) in Manifold, and
- use CSS in Manifold to have those styled elements render in the browser they way you would like.

If you’re reading that and thinking *Yikes!*, don’t freak out. Each of those points will be considered at length on this page, and we’ll be supplying you with a style map, Word template, and a stylesheet (that’s the CSS) here to get you started. But it is important to note some frictions you will encounter right here at the start.

While each of those three items we just listed are all interrelated ***and necessary***, one is more frustrating than the rest. Mapping Word styles to HTML attributes is something ***only*** an instance Admin can do. So if you aren’t an Admin on your instance, you will need a friend who is. But that’s okay: it’s good to make new friends, right?

Before we move on, there is another equally important consideration related to all this that we need to bring up. Some of you reading this may be working on a shared Manifold instance. Which means you might be thinking you need to magically find a way to get a wide swath of users all working in the same way, consistently—and with the same general set of expectations. 🙃 Or you will need to think of strategies to enable different style mappings. Fortunately we have some ideas on the latter, so don’t fret. We’ll get to those in short order. Now, onward!

## Workflow

If this is your first time through, it may seem like there is a chicken-egg dynamic at play here. But be assured that once you get the pieces in place, there is a definite process that flows logically from *A* to *B*. That final, polished workflow will look something like this:

1. An author composes their material in Word, ***using*** Word styles to give structure to their document.
2. Someone—maybe it’s the author, maybe it’s a project manager, maybe it’s you—ingests the Word file into a Manifold Project.
3. Manifold, during the ingestion process, transforms the paragraph and character style in the Word document into HTML attributes—using the style map discussed on this page—and then Manifold applies its Global Ingestion Styles (again, the CSS noted above) to that document, so that all those carefully styled elements from Word render in Manifold as expected.

It’s important to note that step 3 is something *you* don’t need to actively participate in each time. Once you have the style map and the stylesheet set up, that all happens automatically as part of the ingest. The real work is about finding ways to make a success of step 1.

## 1. Styling Word Documents

Let’s be candid, styling Word documents is where your real struggle with this process is going to happen. Most folks you are going to deal with learned how to use Word, and word processors more generally, by embracing the “what you see is what you get” (WYSIWYG) mentality and corresponding set of features, which app designers created to make it easier for everyone to use their software. But WYSIWYG is a mirage that obfuscates the truth. It gives your a false impression of what you are actually doing to the text you are adjusting, and it confuses structure with rendering. Bear with us for a moment.

- Open a Word document you’re wanting to load into Manifold, making sure are in the **Print Layout** view (you can confirm this in the **View** menu).
- Now, from the **Home** menu in the ribbon, select the button for **Styles Pane**. It should be a little right of center. When you click that, you should see a sidebar slide out from the right with a listing of different styles.
- Look to the bottom of that sidebar. There should be two checkbox options. Click on the top one: **Show styles guides**. The styles sidebar on the right side of the screen will now include numbered blocks next to each style, each differently colored to help distinguish one from another. And you should likewise see colored blocks with numbers to the left of each of the paragraphs in your document.

Okay, good. Now here’s the kicker. Ready? It’s time to clear the mirage away: Paragraphs that share the same color and number, regardless of how you have manually adjusted them (left-aligned or centered, differently indented, etc.), are all interpreted by computer systems as being the same kind of paragraph, regardless of how they look. Any adjustments you manually made to change how paragraphs show on the screen are purely local overrides that ***only*** exist in Word. When you export from Word or convert a Word file into a different format, those formatting overrides you likely spent a good deal of time working on—yeah they get discarded as if you never did them.

That . . . sucks, . . . so what now? Good question! Now you start using those styles you see in the sidebar to compose (or “describe” or “code” or “structure”) your document. Why? First, because it actually requires a lot less time than manually futzing with formatting. Really! Second, because those styles can be made to persist and serve as targets for stylesheets. If that second point makes all of zero sense, don’t worry, it will shortly. We’ll get there together! Follow along, friends, we’re getting to the good stuff!

:::info Wait, What about All My Italics!?
Happily, your existing use of italics and bold and super/subscript is safe. Those stylings affect “runs” of text *within* a paragraph and persist even when paragraph stylings do not. We’ll talk more about this below in the **[Character Styles](/docs/walkthroughs/word_mammoth.md#character-styles)** section.
:::

### Applying Styles

In Word and other WYSIWYG applications, formatting tools like the ruler and the various buttons to select alignment, font weight and size, etc. are all concerned with how content renders or appears on the screen. Styles, however, are concerned with structure. What something looks like versus what something is—that’s the thrust of the difference.

<!-- START HERE -->

Microsoft documention for [Applying Styles](https://support.microsoft.com/en-us/office/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109) as well as for [Customizing Styles](https://support.microsoft.com/en-us/office/customize-or-create-new-styles-d38d6e47-f6fc-48eb-a607-1eb120dec563).

<!-- At some point here, create a definition list of all the styles in the template and how they should be used. -->

#### Paragraph Styles

#### Character Styles

### Reviewing Styles

<!-- Talk more about the setup to see styles in Word. Discuss what is already covered and also mention the draft view options. -->

:::caution Beware Add-Ons
For more advanced Word users who enjoy using Field Codes to create linked references or add-ons like Zotero to inject bibliographic data, be sure to convert all of that material plain, editable text before loading your document into Manifold. Those features pollute your Word file with a lot of content that *you* can’t see but which Manifold can and will. And depending on what you have and how it’s set up in your file, your ingest may not work or you will end up seeing programming code baked into the body of your file when it shows up in Manifold.
:::

## 2. Loading Texts

<!-- This is already discussed elsewhere, so we can just gesture to that from here and call it good. -->

## 3. Manifold Ingestion Settings

<!-- 
What to do for non-admins?
Using local-level styles to avoid conflicts with other users on the instance
-->

### Mammoth Style Map

While it appears further down the page in the Manifold interface than the Global Styles input, for our purposes here it makes sense to consider the Mammoth Style Map first.

```
p[style-name='Title'] => h1.textTitle
p[style-name='Subtitle'] => h1.cs
p[style-name='Author'] => p.au
p[style-name='Abstract'] => div.abstract > p.abst:fresh
p[style-name='Epigraph'] => div.epigraph > p.epf:fresh
p[style-name='Attribution'] => div.epigraph > p.ept
p[style-name='Heading 1'] => h2.ah
p[style-name='Heading 2'] => h3.bh
p[style-name='Heading 3'] => h4.ch
p[style-name='Normal'] => p.p:fresh
p[style-name='First'] => p.pf
p[style-name='Continue'] => p.pcon
p[style-name='PSpace'] => p.psec
p[style-name='Bio'] => div.bio > p.aubio:fresh
p[style-name='Endnote Text'] => p.en:fresh
p[style-name='Quote'] => blockquote > p.bqs:fresh
p[style-name='List'] => ol.ref > li.rf:fresh
p[style-name='List Number'] => ol.number > li.nl:fresh
p[style-name='List Bullet'] => ol.bullet > li.bl:fresh
p[style-name='LeftFig'] => figure.figl
p[style-name='LeftCapt'] => figure.figl > figcaption.figcapl
p[style-name='CenterFig'] => figure
p[style-name='CenterCapt'] => figure > figcaption.figcap
p[style-name='RightFig'] => figure.figr
p[style-name='RightCapt'] => figure.figr > figcaption.figcapr
p[style-name='Table Title'] => p.tabletitle
p[style-name='tch'] => p.tch
p[style-name='td'] => p.td
r[style-name='b'] => strong
r[style-name='cite'] => cite
r[style-name='em'] => em
r[style-name='i'] => em
```


### Global Styles

These style will apply to every Text that is ingested into the system. The rather large caveat there, is that the system first has to match these styles with any incoming text. Hence the need to make these styles specific to your group . . .

<!-- Contrast this with text-level stylesheets -->

```css
/*HTML*/
a {color: #0066cc; -webkit-transition:background-color .25s linear; transition: background-color .25s linear; text-decoration: none;}
a:active, a:focus, a:hover {background-color:#FFFFCC; color: #BF1722; border-top: 1px solid #3b3b3b; border-bottom: 1px solid #3b3b3b; border-radius: .2em; text-decoration: none;}
blockquote {margin: 1.5em 2em 1.5em 2em;}
body {font-size: medium; margin-top: 1em; margin-left: 1em; margin-right: 1em;}
figure {margin: 1em auto 1em auto; text-align:center; text-indent: 0;}
img {text-align:center; text-indent:0;}
ol {margin-top: 1em; margin-bottom: 1em; padding: 0; list-style-position: outside;}
ol.ref {list-style-type: none;}
ol.number {list-style-type: decimal; margin-left: 2em;}
ol.bullet {list-style-type: disc; margin-left: 2em;}
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

/*Part and Chapters*/
.textTitle {text-align:left; text-indent:0; font-size: 2em; margin: 1% 0 0 2.5rem;}
.cs {text-align:left; text-indent:0; font-size: .875em; margin-top: .25em; margin-bottom:1%; margin-left: 2.5rem;}
.abstract {margin: .5em 2em 0 2.5rem; }
.abst {text-indent: 0; margin:0; font-weight: 200;}
.abst + .abst {text-indent: 1em; margin-top: 0;}
.au {text-align:left; font-size: 0.75em; margin-top:.35em; margin-left: 2.5rem; text-indent: 0;}

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