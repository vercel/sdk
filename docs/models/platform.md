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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `source`                                                                                   | [models.CreateDeploymentDeploymentsSource](../models/createdeploymentdeploymentssource.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `origin`                                                                                   | [models.CreateDeploymentOrigin](../models/createdeploymentorigin.md)                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `meta`                                                                                     | Record<string, *string*>                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |