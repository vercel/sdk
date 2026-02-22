# ResponseBodyResourceConfig

## Example Usage

```typescript
import { ResponseBodyResourceConfig } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyResourceConfig = {
  functionDefaultRegions: [],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `elasticConcurrencyEnabled`                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `fluid`                                                                                            | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `functionDefaultRegions`                                                                           | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `functionDefaultTimeout`                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `functionDefaultMemoryType`                                                                        | [models.ResponseBodyFunctionDefaultMemoryType](../models/responsebodyfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `functionZeroConfigFailover`                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `buildMachineType`                                                                                 | [models.ResponseBodyBuildMachineType](../models/responsebodybuildmachinetype.md)                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `isNSNBDisabled`                                                                                   | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `buildQueue`                                                                                       | [models.ResponseBodyBuildQueue](../models/responsebodybuildqueue.md)                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |