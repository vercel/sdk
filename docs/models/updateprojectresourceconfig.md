# UpdateProjectResourceConfig

Specifies resource override configuration for the project

## Example Usage

```typescript
import { UpdateProjectResourceConfig } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectResourceConfig = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `buildMachineType`                                                                                   | [models.UpdateProjectBuildMachineType](../models/updateprojectbuildmachinetype.md)                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `fluid`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionDefaultRegions`                                                                             | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | The regions to deploy Vercel Functions to for this project                                           |
| `functionDefaultTimeout`                                                                             | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionDefaultMemoryType`                                                                          | [models.UpdateProjectFunctionDefaultMemoryType](../models/updateprojectfunctiondefaultmemorytype.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `functionZeroConfigFailover`                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Specifies whether Zero Config Failover is enabled for this project.                                  |
| `elasticConcurrencyEnabled`                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |