# GetDeploymentServicesDaemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { GetDeploymentServicesDaemon } from "@vercel/sdk/models/getdeploymentservicesmiddlewareruntime.js";

let value: GetDeploymentServicesDaemon = {
  entrypoint: "<value>",
  replicas: {
    "key": 7279.42,
    "key1": 1495.75,
    "key2": 8938.05,
  },
  root: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `command`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `entrypoint`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `replicas`                                                                           | Record<string, *number*>                                                             | :heavy_check_mark:                                                                   | Replica counts by region.                                                            |
| `resources`                                                                          | [models.GetDeploymentServicesResources](../models/getdeploymentservicesresources.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `root`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |