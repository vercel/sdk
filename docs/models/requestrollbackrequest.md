# RequestRollbackRequest

## Example Usage

```typescript
import { RequestRollbackRequest } from "@vercel/sdk/models/requestrollbackop.js";

let value: RequestRollbackRequest = {
  projectId: "<id>",
  deploymentId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `deploymentId`                                           | *string*                                                 | :heavy_check_mark:                                       | The ID of the deployment to rollback *to*                |                                                          |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | The reason for the rollback                              |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |