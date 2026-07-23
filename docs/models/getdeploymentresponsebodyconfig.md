# GetDeploymentResponseBodyConfig

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { GetDeploymentResponseBodyConfig } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyConfig = {
  functionType: "standard",
  functionMemoryType: "standard",
  functionTimeout: 2668.73,
  secureComputePrimaryRegion: "<value>",
  secureComputeFallbackRegion: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                      | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `functionType`                                                                                                 | [models.GetDeploymentResponseBodyFunctionType](../models/getdeploymentresponsebodyfunctiontype.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `functionMemoryType`                                                                                           | [models.GetDeploymentResponseBodyFunctionMemoryType](../models/getdeploymentresponsebodyfunctionmemorytype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `functionTimeout`                                                                                              | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `secureComputePrimaryRegion`                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `secureComputeFallbackRegion`                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isUsingActiveCPU`                                                                                             | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `resourceConfig`                                                                                               | [models.GetDeploymentResponseBodyResourceConfig](../models/getdeploymentresponsebodyresourceconfig.md)         | :heavy_minus_sign:                                                                                             | Build resource configuration snapshot for this deployment.                                                     |