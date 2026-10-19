# GetConditionalBypassRequest

## Example Usage

```typescript
import { GetConditionalBypassRequest } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassRequest = {
  projectId: "<id>",
  slug: "my-team-url-slug",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | my-team-url-slug                                         |
| `domain`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |