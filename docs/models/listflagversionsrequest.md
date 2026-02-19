# ListFlagVersionsRequest

## Example Usage

```typescript
import { ListFlagVersionsRequest } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsRequest = {
  projectIdOrName: "<value>",
  flagIdOrSlug: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectIdOrName`                                        | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `flagIdOrSlug`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Pagination cursor                                        |                                                          |
| `environment`                                            | *string*                                                 | :heavy_minus_sign:                                       | Environment to filter by                                 |                                                          |
| `withMetadata`                                           | *boolean*                                                | :heavy_minus_sign:                                       | Whether to include metadata                              |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |