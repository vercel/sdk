# ListPromoteAliasesRequest

## Example Usage

```typescript
import { ListPromoteAliasesRequest } from "@vercel/sdk/models/listpromotealiasesop.js";

let value: ListPromoteAliasesRequest = {
  projectId: "<id>",
  limit: 20,
  since: 1609499532000,
  until: 1612264332000,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Maximum number of aliases to list from a request (max 100).                   | 20                                                                            |
| `since`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Get aliases created after this epoch timestamp.                               | 1609499532000                                                                 |
| `until`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Get aliases created before this epoch timestamp.                              | 1612264332000                                                                 |
| `failedOnly`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | Filter results down to aliases that failed to map to the requested deployment |                                                                               |
| `teamId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The Team identifier to perform the request on behalf of.                      | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                 |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The Team slug to perform the request on behalf of.                            | my-team-url-slug                                                              |