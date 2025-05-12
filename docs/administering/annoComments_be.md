---
id: annoComments_be
title: Managing Annotations and Comments
sidebar_label: Managing Annotations and Comments
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The options described in this section can be accessed in the Manifold backend by selecting **Records** from the main menu and then either **Annotations** or **Comments** in the submenu.

Only users logged in with **Admin** accounts can access and engage with these views.
:::

<!-- 

When selected, a drawer opens from the right of the screen, titled **Annotation Detail**. The drawer contains two default buttons below the title—**View** and **Delete**—and a contextual one labeled **Resolve All Flags**, which only appears when the annotation you selected has been flagged by a user. These buttons are the only dynamic elements in the drawer. The remaining content is purely for informative purposes and is divided into three sections labeled **Flags**, **Content**, and **Metadata**.

Beginning with the buttons, let’s consider each of these elements in turn:

- The **View** button moves the user to the frontend, to the place in the text where the annotation was made, with the annotation drawer open the particular annotation in question.
- The **Delete** button provides a means for an administrator to delete the individual annotation in question.
- The **Resolve All Flags** button resolves—or removes—all of the flags associated with the annotation. This is the option an administrator would select when they feel the annotation can remain as is.

The following static elements in this view only provide contextual information. No action happens in this space.

<ul>
  <li>
    <p>The <strong>Flags</strong> heading will appear only if the annotation has been flagged by a user in the frontend. A list of those flags appears beneath the heading, each one made up of the date the annotation was flagged, the username of the person who flagged the annotation, and (potentially) the reason why the user flagged the annotation for review.</p>
    <p>In situations where the annotation was previously flagged and those flags were resolved, a record will remain in this space indicating how many flags have been resolved over time.</p>
    <p>See the <a href="../using/reading_manifold.md#reporting-inappropriate-content">Reporting Inappropriate Content section</a> for more on how users can flag content for administrative review.</p>
  </li>
  <li>The <strong>Content</strong> heading introduces a text box that contains the raw text of the annotation itself.</li>
  <li>The <strong>Metadata</strong> section includes four fields that provide the date the annotation was made, the text to which the annotation was saved, the name of the Reading Group to which it is associated, and the username and account role associated with the person who created the annotation.</li>
</ul>


Email message: 

> The following Annotation in [Text Name] has been flagged 1 time.
>  
> Just an Annotation.
> With the latest flag, the user included this comment:
>
> Testing the flagging system.
-->