# CreateDeploymentServicesDaemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { CreateDeploymentServicesDaemon } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentServicesDaemon = {
  entrypoint: "<value>",
  replicas: {},
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
| `resources`                                                                                | [models.CreateDeploymentServicesResources](../models/createdeploymentservicesresources.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `root`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |