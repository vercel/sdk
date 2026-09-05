# ResponseBodyFunctions

## Example Usage

```typescript
import { ResponseBodyFunctions } from "@vercel/sdk/models/createdeploymenthasdeploymentstype.js";

let value: ResponseBodyFunctions = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `architecture`                                                           | [models.ResponseBodyArchitecture](../models/responsebodyarchitecture.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `memory`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxDuration`                                                            | *models.ResponseBodyMaxDuration*                                         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `affinity`                                                               | [models.ResponseBodyAffinity](../models/responsebodyaffinity.md)         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxConcurrency`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `regions`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `functionFailoverRegions`                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `runtime`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `includeFiles`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `excludeFiles`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `experimentalTriggers`                                                   | *models.ResponseBodyExperimentalTriggers*[]                              | :heavy_minus_sign:                                                       | N/A                                                                      |
| `supportsCancellation`                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |