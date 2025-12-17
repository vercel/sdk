# GetProjectsResourceConfig

## Example Usage

```typescript
import { GetProjectsResourceConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResourceConfig = {
  functionDefaultRegions: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `elasticConcurrencyEnabled`                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `fluid`                                                                                          | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionDefaultRegions`                                                                         | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `functionDefaultTimeout`                                                                         | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionDefaultMemoryType`                                                                      | [models.GetProjectsFunctionDefaultMemoryType](../models/getprojectsfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionZeroConfigFailover`                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `buildMachineType`                                                                               | [models.GetProjectsBuildMachineType](../models/getprojectsbuildmachinetype.md)                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `isNSNBDisabled`                                                                                 | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `buildQueue`                                                                                     | [models.GetProjectsBuildQueue](../models/getprojectsbuildqueue.md)                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |