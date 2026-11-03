# DeleteFlagsProjectConnectionRequest

## Example Usage

```typescript
import { DeleteFlagsProjectConnectionRequest } from "@vercel/sdk/models/deleteflagsprojectconnectionop.js";

let value: DeleteFlagsProjectConnectionRequest = {
  projectIdOrName: "<value>",
  consumerProjectId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectIdOrName`                                        | *string*                                                 | :heavy_check_mark:                                       | The project id or name                                   |                                                          |
| `consumerProjectId`                                      | *string*                                                 | :heavy_check_mark:                                       | The connected consumer project id                        |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |