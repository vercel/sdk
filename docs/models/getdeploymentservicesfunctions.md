# GetDeploymentServicesFunctions

Function configuration scoped to this service.

## Example Usage

```typescript
import { GetDeploymentServicesFunctions } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentServicesFunctions = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `architecture`                                                                             | [models.GetDeploymentServicesArchitecture](../models/getdeploymentservicesarchitecture.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `memory`                                                                                   | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `maxDuration`                                                                              | *models.GetDeploymentServicesMaxDuration*                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `regions`                                                                                  | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `functionFailoverRegions`                                                                  | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `runtime`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `includeFiles`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `excludeFiles`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `experimentalTriggers`                                                                     | *models.GetDeploymentServicesExperimentalTriggers*[]                                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `supportsCancellation`                                                                     | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |