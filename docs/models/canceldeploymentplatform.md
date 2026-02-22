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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `source`                                                                                   | [models.CancelDeploymentDeploymentsSource](../models/canceldeploymentdeploymentssource.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `origin`                                                                                   | [models.CancelDeploymentOrigin](../models/canceldeploymentorigin.md)                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `meta`                                                                                     | Record<string, *string*>                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |