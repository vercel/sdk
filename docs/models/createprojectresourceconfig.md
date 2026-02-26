# CreateProjectResourceConfig

Specifies resource override configuration for the project

## Example Usage

```typescript
import { CreateProjectResourceConfig } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectResourceConfig = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `fluid`                                                                    | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionDefaultRegions`                                                   | *string*[]                                                                 | :heavy_minus_sign:                                                         | The regions to deploy Vercel Functions to for this project                 |
| `functionDefaultTimeout`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionDefaultMemoryType`                                                | [models.FunctionDefaultMemoryType](../models/functiondefaultmemorytype.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functionZeroConfigFailover`                                               | *boolean*                                                                  | :heavy_minus_sign:                                                         | Specifies whether Zero Config Failover is enabled for this project.        |
| `elasticConcurrencyEnabled`                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `buildMachineType`                                                         | [models.BuildMachineType](../models/buildmachinetype.md)                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `buildMachineSelection`                                                    | [models.BuildMachineSelection](../models/buildmachineselection.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `buildMachineElasticLastUpdated`                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `isNSNBDisabled`                                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `buildQueue`                                                               | [models.CreateProjectBuildQueue](../models/createprojectbuildqueue.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |