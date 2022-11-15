---
id: word_mammoth
title: Ingesting Word Documents
sidebar_label: Ingesting Word Documents
---

Manifold is able to create a Text from a number of a different source formats. Generally speaking, nothing special is required for that transaction to take place: you select a file in one of those accepted formats (EPUB, HTML, Markdown, DOCX, Google Doc), ingest it into Manifold, and the system creates a Text from it.

Sometimes, however, there is something lost in the translation from the source document to Manifold, especially for formats dependent on proprietary systems like Google and Word.

This page describes how you leverage existing functionality in both Word and Manifold to allow for a successful and representative translation of your Word Documents into Manifold Texts.

## Who Is This For?

Are you standing as the sole support person on your team or institution, working to help your colleagues get their content into Manifold? Are some of your colleagues not as comfortable with technology as you wish they were? And despite all that, are you wanting to provide your people with the means to exert a fair degree of control over how their materials look and feel in Manifold? Does the words *template* and *standardized process* kindle a little joy in your heart?

If some or all of that is true, then this page is very much for you! You might be a digital services librarian or a journals production editor, you might maintain an instance of Manifold yourself or be one group of many using a Manifold instance maintained by a larger umbrella entity. You might even be an independent user who favors Word and wants to make the most of its relationship with Manifold. 

This page is long, but bear with us—the work described here, while a bit of a slog at the start, is very much intended to make your life easier, your work more efficient, and for your Word ingestions to be both more nuanced and consistent.

## Considerations



<!--

specifically about user roles and relationship to entity that controls the instance


-->

## Workflow


## Styling Word Documents

### Loading a Template

<!-- Detail how to see the style pane -->
View: Draft Mode
Tools --> Templates and Add-Ins

<!-- Suggesting and loading a template -->

### Applying Styles

<!-- Perhaps suggest styles and test them in the system and provide the template from Scribe? -->

### Reviewing Styles

## Manifold Ingestion Settings

<!-- 
What to do for non-admins?
Using local-level styles to avoid conflicts with other users on the instance
-->

### Mammoth Style Map

While it appears further down the page in the Manifold interface than the Global Styles input, for our purposes here it makes sense to consider the Mammoth Style Map first.

```
p[style-name='ah'] => h2.ah
p[style-name='au'] => p.au
p[style-name='bh'] => h3.bh
p[style-name='cs'] => h1.cs
p[style-name='Title'] => h1.textTitle
p[style-name='en'] => p.en
p[style-name='epf'] => div.epigraph > p.epf
p[style-name='ept'] => div.epigraph > p.ept
p[style-name='fig'] => figure > fig
p[style-name='figcap'] => figure > figcaption.figcap
p[style-name='nl'] => ol > li.nl:fresh
p[style-name='nlf'] => ol > li.nlf
p[style-name='nll'] => ol > li.nll
p[style-name='p'] => p.p:fresh
p[style-name='paft'] => p.paft
p[style-name='pf'] => p.pf
r[style-name='b'] => strong
r[style-name='cite'] => cite
r[style-name='em'] => em
r[style-name='Endnote Reference'] => a.ennum
r[style-name='enref'] => a.enref
r[style-name='i'] => em
```


### Global Styles

These style will apply to every Text that is ingested into the system. The rather large caveat there, is that the system first has to match these styles with any incoming text. Hence the need to make these styles specific to your group . . .

<!-- Contrast this with text-level stylesheets -->

```css
/*Links*/

a {
	color: #0066cc;
	-webkit-transition:background-color .25s linear;
	transition: background-color .25s linear;
	text-decoration: none;
}

a:active, a:focus, a:hover {
	background-color:#FFFFCC;
	color: #BF1722;
	border-top: 1px solid #3b3b3b;
	border-bottom: 1px solid #3b3b3b;
	border-radius: .2em;
	text-decoration: none;
}

/*HTML*/
blockquote {margin: 1.5em 2em 1.5em 2em;}
body {font-size: medium; margin-top: 1em; margin-left: 1em; margin-right: 1em;}
figure {margin: 1em auto 1em auto; text-align:center; text-indent: 0;}
img {text-align:center; text-indent:0;}
ol {margin-top: 1em; margin-bottom: 1em; padding: 0; list-style-position: outside;}
li {margin-left: 1em;}
p {text-indent: 1em; text-align:left; margin-top: 0; margin-bottom: 0; line-height: 1.575}
table {width:100%; margin-top: 1.25em; margin-bottom: 1.25em; border-collapse: collapse;}
table, td, th {border: 1px solid black;}
td {vertical-align: middle; padding: 2px;}
th {vertical-align: middle; padding: 2px;}

/*Structure Elements*/

.epigraph {margin: 3rem 4rem 3rem 2.5rem;}
.list {margin: 1.5em 2.5em 1.5em 2.5em;}
.notes {list-style-position: outside;}
.pullquote {margin: 1.5em 2em 1.5em 2em;}
.question  {margin-bottom:1.5em; margin-top:1.5em;}
.senseline {margin: 1.5em 2em 1.5em 2em;}
.sidebar {margin: 1.5em 2em 1.5em 2em;}
.story {margin: 1.5em 2em 1.5em 2em}
.table {margin-top: 1em; margin-bottom: 1em;}

/*Part and Chapters*/
.cn {text-align:left; text-indent:0; font-size: .875em; font-weight: bold; margin-top:1%; margin-left: 2.5rem; }
.textTitle {text-align:left; text-indent:0; font-size: 2em; margin: 1% 0 0 2.5rem;}
.cs {text-align:left; text-indent:0; font-size: .875em; margin-top: .25em; margin-bottom:1%; margin-left: 2.5rem;}
.au {text-align:left; font-size: 0.75em; margin-top:.35em; margin-left: 2.5rem; text-indent: 0;}
.au1 {text-align:center; font-size:90%; text-indent: 0;}

/*Epigraph*/
.ep {text-indent: 0; margin-top: 1em; text-align:left; font-size: 95%;} 
.epaft {text-indent: 0; margin-top: .75em; text-align:left; font-size: 95%;}
.epf {text-indent: 0; text-align:left; font-size: 95%; margin-top: 1.25em;}
.epl {text-align:left; text-indent: 0; font-size: 95%;}
.eps {text-indent: 0; text-align:left; margin-top: .75em; margin-bottom: .75em; font-size: 95%;}
.ept {text-align:left; margin-top:.3em; margin-left: 2rem; font-size: 95%; text-indent: 0;}

/*Heads*/
.ah {font-weight:bold; font-size: 125%; margin-top:1.25em; margin-right: 20%; margin-bottom: 0; text-indent:0; text-align:left;}
.ahaft {font-weight:bold; font-size: 125%; margin-top:3em; margin-right: 20%; margin-bottom: 0; text-indent:0; text-align:left;}
.bh {font-size: 115%; font-weight: bold; font-style: italic; margin-top:1.25em; margin-bottom:0%; text-indent:0; text-align:left;}
.bhaft {font-size: 115%; font-weight: bold; font-style: italic; margin-top: 0; margin-bottom:0%; text-indent:0; text-align:left;}
.ch {font-weight:bold; font-style: italic; margin-top:1.25em; margin-bottom:0; text-indent: 0; text-align:left;}
.chaft {font-size: 0.6875em; margin-top: 0; margin-bottom:0; font-weight: bold; text-align:left; text-indent: 0;}
.dh {font-weight:bold; font-size: 0.6875em; margin-top:1.25em; margin-bottom:0; text-indent: 0; text-align:left;}
.dhaft {font-size: 0.6875em; font-style: italic; margin-top: 0; margin-bottom:0; text-indent:0; text-align:left;}
.eh {font-size: 0.625em; margin-top:6%; margin-top:1.25em; text-align:left; text-indent: 0; font-weight: bold;}
.ehaft {font-size: 0.625em; margin-top: 1%; margin-bottom:1%; text-align:left; text-indent: 0; font-weight: bold;}
.hdn {text-align: left; text-indent: 0; margin-top: 1.5em; font-size: 90%;}

/*Body*/
.paft {text-indent: 0; margin-top: .25em; margin-bottom: 0; text-align:left;}
.pcon {margin-top: 1em; margin-bottom: 0; text-indent: 0; text-align:left;}
.patr {text-align:right; margin-top:0; margin-bottom:1.5em;}
.patr1 {text-align:right; margin-top:.25em; font-size: 0.6875em;}
.pf {margin-top: 3em; margin-bottom: 0; text-align:left; text-indent: 0;}
.psec {margin-top: 2em; text-indent: 0; text-align:left;}
.sec {text-align:center; margin-top: 1em; margin-bottom: 1em; text-indent: 0;}
.aubio	{width: 65%; margin:1em auto 0 auto; text-align:left; text-indent:0; padding-bottom: .5em;}
.aubiof	{width: 65%; margin:3em auto 0 auto; text-align:left; text-indent:0; padding-top: .5em; padding-bottom: .5em;}

/*Block Quotation*/
.bqh {font-weight: bold; text-indent:0; margin-right:2em; margin-left:0; text-align:left; font-style: italic; margin-bottom: 1em;}
.bq {margin-right: 2em; margin-left:0; text-indent: 1em; text-align:left;}
.bqaft {margin-right: 2em; margin-left:0; text-indent:0; text-align:left;}
.bqf {margin-right: 2em; margin-left:0; text-indent:0; text-align:left; margin-top: 1em;}
.bql {margin-right: 2em; margin-left:0; text-align:left; margin-bottom: 1em; text-indent:1em;}
.bqo {margin: 1em 2em 1em 0; text-align:left; text-indent: 0;}
.bqs {margin: 1em 2em 1em 0; text-align:left; text-indent: 0;}
.bqt {text-align:right; font-style:italic; margin-right: .5em; margin-top:.5em; margin-bottom:.5em; font-size: 0.6875em; text-indent: 0;}

/*Senseline*/
.slh {text-indent: -1em; font-style:italic; font-size: 85%; margin-top: 1em; margin-bottom: 0.5em; font-weight: bold;}
.sl {text-align:left; text-indent: 0; margin-top: 0; margin-bottom: 0;}
.slf {text-align:left; text-indent: 0; margin-top: 1em;}
.sll {text-align:left; text-indent: 0; margin-top: 0; margin-bottom: 1em}
.sls {font-size: 85%; text-align:left; text-indent: -1em;}
.slt {text-indent: 0; text-align: left; margin-top: .5em; margin-bottom: 1em;}

/*Notes*/
.en {text-indent:0; text-align:left;}
.enp {font-size:90%; margin-left: 1em; text-indent: 1em; text-align:left;}
.rf {margin-left: 1em; text-indent: -1em; text-align:left;}
.rf1 {text-indent: -1.25em; margin-left: 1.25em; text-align:left; margin-top: 1em;}
.eds {text-indent: 0; text-align:left; font-size: 90%; margin-top: .5em; margin-bottom: .5em;}
p.en + p {text-indent:0;}

/*Figure*/
.fig {text-align:center; text-indent:0; margin-top: 1em;}
.figcap {font-size:80%; text-align:center; text-indent:0; margin: .25em 2em .75em 2em;}

/*Numbered List*/
.nlh {font-size: 115%; font-weight: bold; margin-top:1em; margin-bottom:0; margin-left: 1.85rem; text-align:left; text-indent: 0;}
.nl {text-indent: 0; text-align:left; margin-left: 1em; margin-top: .5em;}
.nlf {text-indent: 0; text-align:left; margin-left: 1em; margin-top: 1em;}
.nll {text-indent: 0; text-align:left; margin-left: 1em; margin-top: .5em; margin-bottom: 1em;}
.nls {text-indent: -1em; text-align:left; margin-top: 1em; margin-bottom: 1em;}

/*Unnumbered List*/
.ulh {font-weight: bold; font-size: 90%; margin-top:2%; margin-bottom:1%; text-align:left; text-indent: -1em;}
.ul {font-size: 90%; margin-top: .5em; text-indent: -1em; text-align:left;}
.ulf {font-size: 90%; margin-top: 1em; text-indent: -1em; text-align:left;}
.ull {font-size: 90%; margin-top: .5em; margin-bottom: 1em; text-indent: -1em; text-align:left;}
.uls {font-size: 90%; text-indent: -1em; text-align:left; margin-top: .5em; margin-bottom: .5em;}

/*Bulleted List*/
.blh {font-size: 90%; text-align:left; margin-left:1.5rem; margin-top: .75em; font-weight: bold;}
.bl {text-indent: -1em; text-align:left; margin-top: .25em;}
.blf {text-indent: -1em; text-align:left; margin-top: .75em;}
.bll {text-indent: -1em; text-align:left; margin-top: .25em; margin-bottom: .75em;}
.bls {text-indent: -1em; text-align:left; margin-top: .75em; margin-bottom: .75em;}

/*Table*/
.tch {vertical-align:middle; text-align: center; padding: 3px; font-weight: bold; text-indent: 0; font-size: 90%;}
.tch1 {vertical-align:middle; padding: 3px; font-weight: bold; text-indent: 0; font-size: 90%;}
.tch2 {vertical-align:middle; padding: 3px; font-weight: bold; text-indent: 0; font-size: 85%;}
.th {padding: 2px; vertical-align:middle; font-weight:bold; font-size: large; text-indent: 0;}
.tatr {font-size: 0.625em; text-align:left; text-indent:-1.25em;}
.td {text-indent: 0; vertical-align: middle; text-align: center; padding: 2px; font-size: 75%;}
.tdf {vertical-align:middle; padding: 2px; text-indent: 0; font-size: 90%; margin-top: .75em;}
.tdl {text-indent: 0; vertical-align: middle; text-align: center; padding: 2px; font-size: 75%;}

/* ----- *** Character Styles *** ----- */

/*Main Styles*/
.b {font-weight: bold;}
.i {font-style: italic;}

/*Reference/Cross-References*/
.enref {font-family: monospace; font-weight: bold; font-size: 0.675em; line-height: 1.2; vertical-align: super; vertical-align: 35%;}

/*Superscript and Subscript*/
.sub {vertical-align: sub;}
.sup {vertical-align: super;}

/*Paragraph/Character Style Pairs*/
.aubion {font-weight:bold;}
.dispk {font-weight:bold;}
.fighn {font-weight:bold;}

/*Accessibility*/
.cite {font-style: italic;}
.em {font-style: italic;}
.fterm {font-style: italic;}
.strong {font-weight: bold;}
```