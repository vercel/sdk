# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `forceNew`                                                                           | [models.ForceNew](../models/forcenew.md)                                             | :heavy_minus_sign:                                                                   | Forces a new deployment even if there is a previous similar deployment               |                                                                                      |
| `skipAutoDetectionConfirmation`                                                      | [models.SkipAutoDetectionConfirmation](../models/skipautodetectionconfirmation.md)   | :heavy_minus_sign:                                                                   | Allows to skip framework detection so the API would not fail to ask for confirmation |                                                                                      |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                        |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   | my-team-url-slug                                                                     |
| `requestBody`                                                                        | [models.CreateDeploymentRequestBody](../models/createdeploymentrequestbody.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |