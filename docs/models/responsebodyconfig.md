# ResponseBodyConfig

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { ResponseBodyConfig } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyConfig = {
  functionType: "fluid",
  functionMemoryType: "standard",
  functionTimeout: null,
  secureComputePrimaryRegion: "<value>",
  secureComputeFallbackRegion: null,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `version`                                                                                              | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `functionType`                                                                                         | [models.ResponseBodyFunctionType](../models/responsebodyfunctiontype.md)                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `functionMemoryType`                                                                                   | [models.ResponseBodyFunctionMemoryType](../models/responsebodyfunctionmemorytype.md)                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `functionTimeout`                                                                                      | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `secureComputePrimaryRegion`                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `secureComputeFallbackRegion`                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isUsingActiveCPU`                                                                                     | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `resourceConfig`                                                                                       | [models.GetDeploymentResponseBodyResourceConfig](../models/getdeploymentresponsebodyresourceconfig.md) | :heavy_minus_sign:                                                                                     | Build resource configuration snapshot for this deployment.                                             |