# GetDeploymentsPlatform

Metadata about the source platform that triggered the deployment.

## Example Usage

```typescript
import { GetDeploymentsPlatform } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsPlatform = {
  creator: {
    name: "<value>",
  },
  origin: {
    type: "id",
    value: "<value>",
  },
  source: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `creator`                                                                                | [models.GetDeploymentsDeploymentsCreator](../models/getdeploymentsdeploymentscreator.md) | :heavy_check_mark:                                                                       | The user on the external platform who triggered the deployment.                          |
| `meta`                                                                                   | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | Arbitrary key-value metadata provided by the platform.                                   |
| `origin`                                                                                 | [models.GetDeploymentsOrigin](../models/getdeploymentsorigin.md)                         | :heavy_check_mark:                                                                       | Reference back to the entity on the platform that initiated the deployment.              |
| `source`                                                                                 | [models.GetDeploymentsDeploymentsSource](../models/getdeploymentsdeploymentssource.md)   | :heavy_check_mark:                                                                       | The external platform that created the deployment (e.g. its display name).               |