# GetDeploymentCheckRunRequest

## Example Usage

```typescript
import { GetDeploymentCheckRunRequest } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunRequest = {
  deploymentId: "<id>",
  checkRunId: "ckr_89ha9sdhh9a9",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `deploymentId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `checkRunId`                                             | *string*                                                 | :heavy_check_mark:                                       | The ID of the resource that will be updated.             | ckr_89ha9sdhh9a9                                         |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |