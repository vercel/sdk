# SearchRepoRequest

## Example Usage

```typescript
import { SearchRepoRequest } from "@vercel/sdk/models/searchrepoop.js";

let value: SearchRepoRequest = {
  host: "ghes-test.now.systems",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `query`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `namespaceId`                                                                     | *models.NamespaceId*                                                              | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `provider`                                                                        | [models.SearchRepoQueryParamProvider](../models/searchrepoqueryparamprovider.md)  | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `installationId`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `host`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The custom Git host if using a custom Git provider, like GitHub Enterprise Server | ghes-test.now.systems                                                             |
| `teamId`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | The Team identifier to perform the request on behalf of.                          | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                     |
| `slug`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The Team slug to perform the request on behalf of.                                | my-team-url-slug                                                                  |