# GetProjectsDefaultResourceConfig

## Example Usage

```typescript
import { GetProjectsDefaultResourceConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsDefaultResourceConfig = {
  functionDefaultRegions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `elasticConcurrencyEnabled`                                                                                      | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `fluid`                                                                                                          | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `functionDefaultRegions`                                                                                         | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `functionDefaultTimeout`                                                                                         | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `functionDefaultMemoryType`                                                                                      | [models.GetProjectsProjectsFunctionDefaultMemoryType](../models/getprojectsprojectsfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `functionZeroConfigFailover`                                                                                     | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `buildMachineType`                                                                                               | [models.GetProjectsProjectsBuildMachineType](../models/getprojectsprojectsbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `isNSNBDisabled`                                                                                                 | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |