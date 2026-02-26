# Platform

Metadata about the source platform that triggered the deployment. Allows us to map a deployment back to a platform (e.g. the chat that created it)

## Example Usage

```typescript
import { Platform } from "@vercel/sdk/models/createdeploymentop.js";

let value: Platform = {
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
| `source`                                                                                     | [models.CreateDeploymentDeploymentsSource](../models/createdeploymentdeploymentssource.md)   | :heavy_check_mark:                                                                           | The external platform that created the deployment (e.g. its display name).                   |
| `origin`                                                                                     | [models.CreateDeploymentOrigin](../models/createdeploymentorigin.md)                         | :heavy_check_mark:                                                                           | Reference back to the entity on the platform that initiated the deployment.                  |
| `creator`                                                                                    | [models.CreateDeploymentDeploymentsCreator](../models/createdeploymentdeploymentscreator.md) | :heavy_check_mark:                                                                           | The user on the external platform who triggered the deployment.                              |
| `meta`                                                                                       | Record<string, *string*>                                                                     | :heavy_minus_sign:                                                                           | Arbitrary key-value metadata provided by the platform.                                       |