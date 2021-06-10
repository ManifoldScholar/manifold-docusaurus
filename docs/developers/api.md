---
id: api
title: API
sidebar_label: API
---

Nearly all changes to data stored in a Manifold installation occur over Manifold's API. The API is a REST API with 168 distinct endpoints. It strives to conform to the [JSON:API specification](https://jsonapi.org/). Our API documentation is bundled into every Manifold installation and can be accessed at /docs/api. So, for example, if your Manifold instance was at https://manifold.foo.edu, you could access the docs at [https://manifold.foo.edu/docs/api](https://manifold.foo.edu/docs/api). Manifold's API docs will allow you to interact with the API as the user you are currently logged in as.

Manifold's API documentation follows the OpenAPI 2.0 specification. The JSON schema file for Manifold's API is available at /api/static/docs/v1/swagger.json on every Manifold installation.

Manifold's API documentation is part of the application itself, written in the form of request specs. Because we're a small team, our API documentation sometimes drifts from the actual implementation, but it should be fairly close. You should also feel free to inspect requests to the API in your browser while interacting with the Manifold frontend to get a better sense of how the client application interacts with the API.

If you discover any errors or shortcomings in our API docs, please open an issue or, even better, submit a PR to help us improve these docs!
