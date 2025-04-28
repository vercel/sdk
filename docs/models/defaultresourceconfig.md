# DefaultResourceConfig

## Example Usage

```typescript
import { DefaultResourceConfig } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: DefaultResourceConfig = {
  functionDefaultRegions: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `fluid`                                                                                                                | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `functionDefaultRegions`                                                                                               | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `functionDefaultTimeout`                                                                                               | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `functionDefaultMemoryType`                                                                                            | [models.UpdateProjectDataCacheFunctionDefaultMemoryType](../models/updateprojectdatacachefunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `functionZeroConfigFailover`                                                                                           | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `elasticConcurrencyEnabled`                                                                                            | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `buildMachineType`                                                                                                     | [models.UpdateProjectDataCacheBuildMachineType](../models/updateprojectdatacachebuildmachinetype.md)                   | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |