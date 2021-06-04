---
slug: "thisweekinmanifoldbackend"
title: "This Week in Manifold: Markdown and Backend Development"
---

Since I last posted, we've been making development progress on a few different fronts. Much of this work is still in feature branches, and has yet to be merged into the main development branch. Therefore, I'm going to skip the full list of revisions in this post, and instead offer a high level description of our recent efforts.

<!--truncate-->

## Markdown and GitBook Support

Fundamentally, Manifold has been conceived as a tool for university presses. When it comes to thinking about how it will be used, UMNP has guided our thinking about what problems presses are trying to solve, and how Manifold can help. That said, I think everyone on the project has also been interested in the ways in which Manifold can be a useful tool for the broader academic community. At the very least, we want to make it possible for individuals to find ways to use Manifold. One impediment to this, in my mind, has been the fact that to date Manifold only accepts finished EPUB documents as an input format, and independent scholars and self-publishers may find it difficult to come up with finished EPUBs.

EPUBs are essentially packages containing HTML, CSS, and Javascript. In a sense, an EPUB is a small, self-contained website, and EPUB readers are offline, limited browsers. HTML, therefore, is already an input format that Manifold understands and can work with. What this means is that any document type that can easily be converted to HTML can likely be consumed by Manifold and made available to readers.

We refer to the process of slurping a book up into Manifold as "Ingestion." Manifold can be extended by adding ingestion strategies to it. An ingestion strategy tells Manifold how to map a source document—eg, an EPUB—to a format it can understand. In short, we've anticipated that we'll want to ingest other kinds of documents and have left places where other developers can create their own strategies. With the aim of testing out this approach and also furthering our goal of increasing Manifold's user base, we spent a couple days writing a Markdown strategy that supports the GitBook format. This means that users will be able to feed Manifold a set of nested Markdown documents, which Manifold will then be able to make available online, just as it does an EPUB. Manifold's documentation, for example, is authored following the GitBook format, and it can now be read within Manifold itself. Three cheers for eating our own dog food!

## Backend Development

Since I last posted, we've also been hard at work at building out the backend interfaces. Most of the basic backend HTML and CSS has been completed, and we're now in the process of developing reusable patterns and components in React to wire up the backend forms to the API. This has been challenging, as there is a lot of functionality required in Manifold's admin interface, and figuring out how to model the requisite state while keeping in our Flux architecture has required some thinking. We're close on this, with some initial proof of concept work, which I'll be discussing more in subsequent posts.

That's it for today! We'll be posting more updates (hopefully with screenshots and some design comps) later this week.