# Functions

## Example Usage

```typescript
import { Functions } from "@vercel/sdk/models/createdeploymentop.js";

let value: Functions = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `architecture`                                   | [models.Architecture](../models/architecture.md) | :heavy_minus_sign:                               | N/A                                              |
| `memory`                                         | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `maxDuration`                                    | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `regions`                                        | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `functionFailoverRegions`                        | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `runtime`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `includeFiles`                                   | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `excludeFiles`                                   | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `experimentalTriggers`                           | *models.ExperimentalTriggers*[]                  | :heavy_minus_sign:                               | N/A                                              |
| `supportsCancellation`                           | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |