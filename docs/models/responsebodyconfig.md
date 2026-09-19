# ResponseBodyConfig

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { ResponseBodyConfig } from "@vercel/sdk/models/responsebodyremotepatterns.js";

let value: ResponseBodyConfig = {
  functionMemoryType: "standard_legacy",
  functionTimeout: null,
  functionType: "fluid",
  secureComputeFallbackRegion: "<value>",
  secureComputePrimaryRegion: null,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `functionMemoryType`                                                                                         | [models.ResponseBodyFunctionMemoryType](../models/responsebodyfunctionmemorytype.md)                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `functionTimeout`                                                                                            | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `functionType`                                                                                               | [models.ResponseBodyFunctionType](../models/responsebodyfunctiontype.md)                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isUsingActiveCPU`                                                                                           | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `resourceConfig`                                                                                             | [models.CreateDeploymentResponseBodyResourceConfig](../models/createdeploymentresponsebodyresourceconfig.md) | :heavy_minus_sign:                                                                                           | Build resource configuration snapshot for this deployment.                                                   |
| `secureComputeFallbackRegion`                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `secureComputePrimaryRegion`                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `version`                                                                                                    | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |