# UpdateDeploymentCheckRunRequest

## Example Usage

```typescript
import { UpdateDeploymentCheckRunRequest } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunRequest = {
  deploymentId: "<id>",
  checkRunId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `checkRunId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team identifier to perform the request on behalf of.                                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                  |
| `slug`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The Team slug to perform the request on behalf of.                                             | my-team-url-slug                                                                               |
| `requestBody`                                                                                  | [models.UpdateDeploymentCheckRunRequestBody](../models/updatedeploymentcheckrunrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |