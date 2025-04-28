# GetProjectsResourceConfig

## Example Usage

```typescript
import { GetProjectsResourceConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResourceConfig = {
  functionDefaultRegions: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `fluid`                                                                                          | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionDefaultRegions`                                                                         | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `functionDefaultTimeout`                                                                         | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionDefaultMemoryType`                                                                      | [models.GetProjectsFunctionDefaultMemoryType](../models/getprojectsfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `functionZeroConfigFailover`                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `elasticConcurrencyEnabled`                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `buildMachineType`                                                                               | [models.GetProjectsBuildMachineType](../models/getprojectsbuildmachinetype.md)                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |