# CreateDeploymentServicesDeploymentsDaemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { CreateDeploymentServicesDeploymentsDaemon } from "@vercel/sdk/models/createdeploymenthasdeploymentsresponse2.js";

let value: CreateDeploymentServicesDeploymentsDaemon = {
  entrypoint: "<value>",
  replicas: {
    "key": 1817.65,
    "key1": 8004.39,
    "key2": 8160.49,
  },
  root: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `command`                                                                                                        | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `entrypoint`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `replicas`                                                                                                       | Record<string, *number*>                                                                                         | :heavy_check_mark:                                                                                               | Replica counts by region.                                                                                        |
| `resources`                                                                                                      | [models.CreateDeploymentServicesDeploymentsResources](../models/createdeploymentservicesdeploymentsresources.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `root`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |