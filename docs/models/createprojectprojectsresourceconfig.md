# CreateProjectProjectsResourceConfig

## Example Usage

```typescript
import { CreateProjectProjectsResourceConfig } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectProjectsResourceConfig = {
  functionDefaultRegions: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `fluid`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionDefaultRegions`                                                                             | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `functionDefaultTimeout`                                                                             | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionDefaultMemoryType`                                                                          | [models.CreateProjectFunctionDefaultMemoryType](../models/createprojectfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionZeroConfigFailover`                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `elasticConcurrencyEnabled`                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `buildMachineType`                                                                                   | [models.CreateProjectBuildMachineType](../models/createprojectbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |