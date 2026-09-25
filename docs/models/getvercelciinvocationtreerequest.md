# GetVercelCiInvocationTreeRequest

## Example Usage

```typescript
import { GetVercelCiInvocationTreeRequest } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeRequest = {
  invocationId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `invocationId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `attempt`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | Invocation attempt to return. Defaults to the latest attempt.                 |                                                                               |
| `follow`                                                                      | *number*                                                                      | :heavy_minus_sign:                                                            | When 1, stream the tree as newline-delimited JSON until the attempt finishes. |                                                                               |
| `teamId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The Team identifier to perform the request on behalf of.                      | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                 |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The Team slug to perform the request on behalf of.                            | my-team-url-slug                                                              |