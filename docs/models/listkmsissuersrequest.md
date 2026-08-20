# ListKmsIssuersRequest

## Example Usage

```typescript
import { ListKmsIssuersRequest } from "@vercel/sdk/models/listkmsissuersop.js";

let value: ListKmsIssuersRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Maximum number of issuers to return.                      |                                                           |
| `next`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Continuation cursor to retrieve the next page of results. |                                                           |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  | team_1a2b3c4d5e6f7g8h9i0j1k2l                             |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        | my-team-url-slug                                          |