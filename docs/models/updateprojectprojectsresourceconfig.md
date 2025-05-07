# UpdateProjectProjectsResourceConfig

## Example Usage

```typescript
import { UpdateProjectProjectsResourceConfig } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsResourceConfig = {
  functionDefaultRegions: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `fluid`                                                                                                              | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `functionDefaultRegions`                                                                                             | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `functionDefaultTimeout`                                                                                             | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `functionDefaultMemoryType`                                                                                          | [models.UpdateProjectProjectsFunctionDefaultMemoryType](../models/updateprojectprojectsfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `functionZeroConfigFailover`                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `elasticConcurrencyEnabled`                                                                                          | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `buildMachineType`                                                                                                   | [models.UpdateProjectProjectsBuildMachineType](../models/updateprojectprojectsbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |