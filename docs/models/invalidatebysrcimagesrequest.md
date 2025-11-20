# InvalidateBySrcImagesRequest

## Example Usage

```typescript
import { InvalidateBySrcImagesRequest } from "@vercel/sdk/models/invalidatebysrcimagesop.js";

let value: InvalidateBySrcImagesRequest = {
  projectIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       | my-team-url-slug                                                                         |
| `requestBody`                                                                            | [models.InvalidateBySrcImagesRequestBody](../models/invalidatebysrcimagesrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |