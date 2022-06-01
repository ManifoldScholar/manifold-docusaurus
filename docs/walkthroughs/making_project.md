---
id: making_project
title: Make a Project
sidebar_label: Make a Project
---

This page describes how to create a new Manifold Project.

## Directions

1. [Log into Manifold](../walkthroughs/login.md).
2. [Navigate to the Manifold backend](../walkthroughs/access_backend.md) using the **Enter Admin Mode** button.
3. From the Dashboard or Projects menu views, select the **Add a new project** button.

   At this point you will be directed to a view where you can add some basic information about your new project: Title, Subtitle, and Description. This screen also confronts you with some Layout options that relate specifically to which content blocks will appear in your Project. The ***only*** piece of information you need to supply to advance from this screen is a Title. Any input or choice made here (including the Title) can be adjusted later.

4. Enter a Title for your project and respond to the remaining fields to whatever degree you want/can at this point.
5. Click the **Save and Continue** button. Congratulations! You just created a Manifold Project.

## Layout Options

The prompts in the Layout section of the New Project view are *optional*. They are each tied to a specific [Content Block](../backend/projects.md#layout). Your responses tell Manifold which Content Blocks to bring into your project at its genesis. These choices are nonbinding, and however your Project looks at its start does not prevent you from making wholesale changes later.

New users find it helpful to have Manifold scaffold out their Projects using these prompts. Advanced users tend ignore them in favor of their personal experience. There are no incorrect approaches here. Do what makes the most sense for you and your workflow.

### Texts

By default, with the radio button here set to **Yes**, Manifold will expect you to supply more than one Text to the project. Based off that assumption, Manifold will stage a Texts block, which can render multiple Texts as a list, in the newly created Project.

If you change the radio button to **No**, Manifold will *not* include a Texts block and assume instead that you have one core text to display, and as such it will stage a Table of Contents block that renders the structural navigation for the Text as a clickable table of contents.

### Resources

Leaving the radio button toggled to **Yes** for this prompt tells Manifold to include a Resources content block in the Project. If you change it to **No**, then Manifold won’t stage a Resources block.

### Extended Description

The default setting here, with the radio button toggled to **Yes** tells Manifold to include a Markdown block in the Project. If you select **No** instead, Manifold will not stage a Markdown block.

### Activity

Will your project change frequently?

This prompt is tied to the Recent Activity block. If you leave the radio button toggled to **Yes** it will appear; if you change it to **No**, it will not.

### Defaults

If you leave all of the radio buttons in this section in their default **Yes** position, your project will contain the following content blocks at its creation:

- Hero (required)
- Texts
- Resources
- Markdown
- Recent Activity
- Metadata (always assumed)
