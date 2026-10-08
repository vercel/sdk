# Daemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { Daemon } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: Daemon = {
  entrypoint: "<value>",
  replicas: {
    "key": 8655.38,
  },
  root: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `command`                                                                                  | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `entrypoint`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `replicas`                                                                                 | Record<string, *number*>                                                                   | :heavy_check_mark:                                                                         | Replica counts by region.                                                                  |
| `resources`                                                                                | [models.CancelDeploymentServicesResources](../models/canceldeploymentservicesresources.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `root`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |