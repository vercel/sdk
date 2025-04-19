# CreateProjectDefaultResourceConfig

## Example Usage

```typescript
import { CreateProjectDefaultResourceConfig } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectDefaultResourceConfig = {
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
| `functionDefaultMemoryType`                                                                                          | [models.CreateProjectProjectsFunctionDefaultMemoryType](../models/createprojectprojectsfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `functionZeroConfigFailover`                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `elasticConcurrencyEnabled`                                                                                          | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `buildMachineType`                                                                                                   | [models.CreateProjectProjectsBuildMachineType](../models/createprojectprojectsbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |