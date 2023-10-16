---
id: manifold_editor
title: Manifold Editor
sidebar_label: Manifold Editor
---

TK. Document Manifold code and rich-text editors

All inline style attributes are now ignored
To Confirm: Adjustments here will be reflected in any epub that is exported from Manifold.

<!-- Status: In Progress

## MathML

- Avoid `style` attributes in Math tags, e.g.: `<math style="">`
- For inline math, include `display="inline"` attribute; the default value is `block`.

### MathML Tags Supported in Manifold

[MathML-Core elements supported in Manifold](https://w3c.github.io/mathml-core/docs/explainer.html#the-elements-of-mathml-core)

- the `math` element itself
- 3 elements called `semantics`, `annotation` and `annotation-xml` which simply provide other annotations or potential semantics in existing content but are generally not rendered.
- 6 token elements—“Token elements in presentation markup are broadly intended to represent the smallest units of mathematical notation which carry meaning. Tokens are roughly analogous to words in text. However, because of the precise, symbolic nature of mathematical notation, the various categories and properties of token elements figure prominently in MathML markup. By contrast, in textual data, individual words rarely need to be marked up or styled specially.” The token elements are (`mtext`, `mi` (identifier), `mn` (number), `mo` (operators in a broad sense), `mspace`, `ms` (string literal—for things like computer algebra systems)
- Layout/Relationship elements `mrow` (for grouping sub-expressions), `mfrac` (for fractions and fraction-like objects such as binomial coefficients and Legendre symbols), `msqrt` and `mroot` for radicals
- `mstyle` (legacy compat, deprecated—just maps to css)
- `merror` (legacy compat—displays its contents as an ”error message”. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors in their input.)
- `maction` (legacy compat, deprecated—just use JavaScript/CSS instead).
- `mpadded`—a row-like grouping container for modifying its position and bounds. (legacy compat, attributes map to CSS, although attributes are more natural for mathematical layout)
- `mphantom`—a co-evolutionary/legacy compat, row-like container that just adds a UA style that maps to visibility: hidden;
- 3 elements about subscripts and superscripts `msub`, `msup` and `msubsup`
- 3 elements about underscripts and overscripts `munder`, `mover` and `munderover`
- 3 elements about prescripts and tensor indexes (`mmultiscripts`, `none`, `mprescripts`)
- 3 elements about tabular math such as matricies and determinants (`mtable`, `mtr` and `mtd`)


## Text Editing 

`void` attribute in the RTE to force a preview of any element.
RTE makes guesses about how invisibles function.

Add the following to the authoring section, maybe?

[Mozilla’s web documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "Embedding Video Elements in HTML") offers good examples for how to properly embed video elements in your code.

:::caution
Currently you can only add videos to texts using Manifold’s code editor; the rich-text editor in Manifold does not yet support video insertion.
:::

https://edge.manifoldapp.org/api/proxy/ingestion_sources/e60eab59-b513-47d1-b492-ba8379628d2f

https://edge.manifoldapp.org/api/proxy/ingestion_sources/e60eab59-b513-47d1-b492-ba8379628d2f.{extension}


{asset-url}
/api/proxy/ingestion_sources/e60eab59-b513-47d1-b492-ba8379628d2f

 -->