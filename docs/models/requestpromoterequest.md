# RequestPromoteRequest

## Example Usage

```typescript
import { RequestPromoteRequest } from "@vercel/sdk/models/requestpromoteop.js";

let value: RequestPromoteRequest = {
  projectId: "<id>",
  deploymentId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `projectId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `deploymentId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `dangerouslyForcePromoteCanary`                                     | *boolean*                                                           | :heavy_minus_sign:                                                  | Skip the rolling release process and promote directly to production |                                                                     |
| `teamId`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | The Team identifier to perform the request on behalf of.            | team_1a2b3c4d5e6f7g8h9i0j1k2l                                       |
| `slug`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | The Team slug to perform the request on behalf of.                  | my-team-url-slug                                                    |