# CancelDeploymentPlatform

Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)

## Example Usage

```typescript
import { CancelDeploymentPlatform } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentPlatform = {
  source: {
    name: "<value>",
  },
  origin: {
    type: "url",
    value: "<value>",
  },
  creator: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `source`                                                                                     | [models.CancelDeploymentDeploymentsSource](../models/canceldeploymentdeploymentssource.md)   | :heavy_check_mark:                                                                           | The external platform that created the deployment (e.g. its display name).                   |
| `origin`                                                                                     | [models.CancelDeploymentOrigin](../models/canceldeploymentorigin.md)                         | :heavy_check_mark:                                                                           | Reference back to the entity on the platform that initiated the deployment.                  |
| `creator`                                                                                    | [models.CancelDeploymentDeploymentsCreator](../models/canceldeploymentdeploymentscreator.md) | :heavy_check_mark:                                                                           | The user on the external platform who triggered the deployment.                              |
| `meta`                                                                                       | Record<string, *string*>                                                                     | :heavy_minus_sign:                                                                           | Arbitrary key-value metadata provided by the platform.                                       |