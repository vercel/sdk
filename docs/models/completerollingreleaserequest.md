# CompleteRollingReleaseRequest

## Example Usage

```typescript
import { CompleteRollingReleaseRequest } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseRequest = {
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `idOrName`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Project ID or project name (URL-encoded)                                                   |                                                                                            |
| `teamId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team identifier to perform the request on behalf of.                                   | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                              |
| `slug`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team slug to perform the request on behalf of.                                         | my-team-url-slug                                                                           |
| `requestBody`                                                                              | [models.CompleteRollingReleaseRequestBody](../models/completerollingreleaserequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |