# DeleteConditionalBypassRequest

## Example Usage

```typescript
import { DeleteConditionalBypassRequest } from "@vercel/sdk/models/deleteconditionalbypassop.js";

let value: DeleteConditionalBypassRequest = {
  projectId: "<id>",
  slug: "my-team-url-slug",
  domain: "smoggy-depot.name",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | my-team-url-slug                                         |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |