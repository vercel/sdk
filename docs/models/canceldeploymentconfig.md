# CancelDeploymentConfig

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { CancelDeploymentConfig } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentConfig = {
  functionType: "standard",
  functionMemoryType: "standard",
  functionTimeout: 1378.13,
  secureComputePrimaryRegion: "<value>",
  secureComputeFallbackRegion: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `version`                                                                                    | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `functionType`                                                                               | [models.CancelDeploymentFunctionType](../models/canceldeploymentfunctiontype.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `functionMemoryType`                                                                         | [models.CancelDeploymentFunctionMemoryType](../models/canceldeploymentfunctionmemorytype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `functionTimeout`                                                                            | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `secureComputePrimaryRegion`                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `secureComputeFallbackRegion`                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |