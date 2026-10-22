# ListFlagLabelCountsRequest

## Example Usage

```typescript
import { ListFlagLabelCountsRequest } from "@vercel/sdk/models/listflaglabelcountsop.js";

let value: ListFlagLabelCountsRequest = {
  projectIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `entityKind`                                             | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The continuation cursor from the previous response.      |                                                          |
| `projectIdOrName`                                        | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |