# GetIntegrationLogDrainsResponseBody

## Example Usage

```typescript
import { GetIntegrationLogDrainsResponseBody } from "@vercel/sdk/models/getintegrationlogdrainsop.js";

let value: GetIntegrationLogDrainsResponseBody = {
  clientId: "oac_xRhY4LAB7yLhUADD69EvV7ct",
  configurationId: "icfg_3bwCLgxL8qt5kjRLcv2Dit7F",
  createdAt: 1558531915505,
  id: "ld_nBuA7zCID8g4QZ8g",
  deliveryFormat: "json",
  name: "My first log drain",
  ownerId: "kr1PsOIzqEL5Xg6M4VZcZosf",
  projectId: "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  projectIds: [
    "AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb",
  ],
  url: "https://example.com/log-drain",
  sources: [
    "build",
    "edge",
  ],
  createdFrom: "integration",
  headers: {
    "Authorization": "Bearer 123",
  },
  environments: [
    "production",
  ],
  branch: "feature/*",
  samplingRate: 0.5,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The oauth2 client application id that created this log drain                                       | oac_xRhY4LAB7yLhUADD69EvV7ct                                                                       |
| `configurationId`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The client configuration this log drain was created with                                           | icfg_3bwCLgxL8qt5kjRLcv2Dit7F                                                                      |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | A timestamp that tells you when the log drain was created                                          | 1558531915505                                                                                      |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique identifier of the log drain. Always prefixed with `ld_`                                 | ld_nBuA7zCID8g4QZ8g                                                                                |
| `deliveryFormat`                                                                                   | [models.GetIntegrationLogDrainsDeliveryFormat](../models/getintegrationlogdrainsdeliveryformat.md) | :heavy_minus_sign:                                                                                 | The delivery log format                                                                            | json                                                                                               |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The name of the log drain                                                                          | My first log drain                                                                                 |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The identifier of the team or user whose events will trigger the log drain                         | kr1PsOIzqEL5Xg6M4VZcZosf                                                                           |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb                                                     |
| `projectIds`                                                                                       | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | The identifier of the projects this log drain is associated with                                   | AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb                                                     |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | The URL to call when logs are generated                                                            | https://example.com/log-drain                                                                      |
| `sources`                                                                                          | [models.GetIntegrationLogDrainsSources](../models/getintegrationlogdrainssources.md)[]             | :heavy_minus_sign:                                                                                 | The sources from which logs are currently being delivered to this log drain.                       | [<br/>"build",<br/>"edge"<br/>]                                                                    |
| `createdFrom`                                                                                      | [models.CreatedFrom](../models/createdfrom.md)                                                     | :heavy_minus_sign:                                                                                 | Whether the log drain was created by an integration or by a user                                   | integration                                                                                        |
| `headers`                                                                                          | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | The headers to send with the request                                                               | {"Authorization": "Bearer 123"}                                                                    |
| `environments`                                                                                     | [models.GetIntegrationLogDrainsEnvironments](../models/getintegrationlogdrainsenvironments.md)[]   | :heavy_check_mark:                                                                                 | The environment of log drain                                                                       | [<br/>"production"<br/>]                                                                           |
| `branch`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The branch regexp of log drain                                                                     | feature/*                                                                                          |
| `samplingRate`                                                                                     | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The sampling rate of log drain                                                                     | 0.5                                                                                                |