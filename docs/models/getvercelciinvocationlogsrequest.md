# GetVercelCiInvocationLogsRequest

## Example Usage

```typescript
import { GetVercelCiInvocationLogsRequest } from "@vercel/sdk/models/getvercelciinvocationlogsop.js";

let value: GetVercelCiInvocationLogsRequest = {
  invocationId: "<id>",
  attempt: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invocationId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `attempt`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `level`                                                  | [models.QueryParamLevel](../models/queryparamlevel.md)[] | :heavy_minus_sign:                                       | Only return log lines with one of these levels.          |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |