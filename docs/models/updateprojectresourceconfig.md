# UpdateProjectResourceConfig

## Example Usage

```typescript
import { UpdateProjectResourceConfig } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectResourceConfig = {
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
| `functionDefaultMemoryType`                                                                          | [models.UpdateProjectFunctionDefaultMemoryType](../models/updateprojectfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionZeroConfigFailover`                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `elasticConcurrencyEnabled`                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `buildMachineType`                                                                                   | [models.UpdateProjectBuildMachineType](../models/updateprojectbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |