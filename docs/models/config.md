# Config

Since February 2025 the configuration must include snapshot data at the time of deployment creation to capture properties for the /deployments/:id/config endpoint utilized for displaying Deployment Configuration on the frontend This is optional because older deployments may not have this data captured

## Example Usage

```typescript
import { Config } from "@vercel/sdk/models/createdeploymentop.js";

let value: Config = {
  functionType: "standard",
  functionMemoryType: "standard_legacy",
  functionTimeout: 8491.2,
  secureComputePrimaryRegion: "<value>",
  secureComputeFallbackRegion: null,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `version`                                                    | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `functionType`                                               | [models.FunctionType](../models/functiontype.md)             | :heavy_check_mark:                                           | N/A                                                          |
| `functionMemoryType`                                         | [models.FunctionMemoryType](../models/functionmemorytype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `functionTimeout`                                            | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `secureComputePrimaryRegion`                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `secureComputeFallbackRegion`                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `isUsingActiveCPU`                                           | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |