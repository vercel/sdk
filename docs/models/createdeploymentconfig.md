# CreateDeploymentConfig

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { CreateDeploymentConfig } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentConfig = {
  functionType: "fluid",
  functionMemoryType: "performance_xl",
  functionTimeout: 4881.15,
  secureComputePrimaryRegion: null,
  secureComputeFallbackRegion: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `version`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `functionType`                                                                       | [models.FunctionType](../models/functiontype.md)                                     | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `functionMemoryType`                                                                 | [models.FunctionMemoryType](../models/functionmemorytype.md)                         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `functionTimeout`                                                                    | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `secureComputePrimaryRegion`                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `secureComputeFallbackRegion`                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isUsingActiveCPU`                                                                   | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `resourceConfig`                                                                     | [models.CreateDeploymentResourceConfig](../models/createdeploymentresourceconfig.md) | :heavy_minus_sign:                                                                   | Build resource configuration snapshot for this deployment.                           |