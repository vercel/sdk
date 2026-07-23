# ServicesFunctions

Function configuration scoped to this service.

## Example Usage

```typescript
import { ServicesFunctions } from "@vercel/sdk/models/canceldeploymentgitrepoownertype.js";

let value: ServicesFunctions = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `architecture`                                                   | [models.ServicesArchitecture](../models/servicesarchitecture.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `memory`                                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `maxDuration`                                                    | *models.ServicesMaxDuration*                                     | :heavy_minus_sign:                                               | N/A                                                              |
| `regions`                                                        | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `functionFailoverRegions`                                        | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `runtime`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `includeFiles`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `excludeFiles`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `experimentalTriggers`                                           | *models.ServicesExperimentalTriggers*[]                          | :heavy_minus_sign:                                               | N/A                                                              |
| `supportsCancellation`                                           | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |