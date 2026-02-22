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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `source`                                                                               | [models.GetDeploymentsDeploymentsSource](../models/getdeploymentsdeploymentssource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `origin`                                                                               | [models.GetDeploymentsOrigin](../models/getdeploymentsorigin.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `meta`                                                                                 | Record<string, *string*>                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |