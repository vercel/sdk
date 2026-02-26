# GetDeploymentsPlatform

Metadata about the source platform that triggered the deployment.

## Example Usage

```typescript
import { GetDeploymentsPlatform } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsPlatform = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `source`                                                                                 | [models.GetDeploymentsDeploymentsSource](../models/getdeploymentsdeploymentssource.md)   | :heavy_check_mark:                                                                       | The external platform that created the deployment (e.g. its display name).               |
| `origin`                                                                                 | [models.GetDeploymentsOrigin](../models/getdeploymentsorigin.md)                         | :heavy_check_mark:                                                                       | Reference back to the entity on the platform that initiated the deployment.              |
| `creator`                                                                                | [models.GetDeploymentsDeploymentsCreator](../models/getdeploymentsdeploymentscreator.md) | :heavy_check_mark:                                                                       | The user on the external platform who triggered the deployment.                          |
| `meta`                                                                                   | Record<string, *string*>                                                                 | :heavy_minus_sign:                                                                       | Arbitrary key-value metadata provided by the platform.                                   |