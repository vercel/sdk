# CreateDeploymentServicesDeploymentsDaemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { CreateDeploymentServicesDeploymentsDaemon } from "@vercel/sdk/models/createdeploymentmissingdeployments2.js";

let value: CreateDeploymentServicesDeploymentsDaemon = {
  entrypoint: "<value>",
  root: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `bindings`                                                                                                       | [models.CreateDeploymentServicesDeploymentsBindings](../models/createdeploymentservicesdeploymentsbindings.md)[] | :heavy_minus_sign:                                                                                               | Bindings to services in the same deployment.                                                                     |
| `command`                                                                                                        | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `entrypoint`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `instances`                                                                                                      | Record<string, *number*>                                                                                         | :heavy_minus_sign:                                                                                               | Instance counts by region.                                                                                       |
| `replicas`                                                                                                       | Record<string, *number*>                                                                                         | :heavy_minus_sign:                                                                                               | Instance counts by region.                                                                                       |
| `resources`                                                                                                      | [models.CreateDeploymentServicesDeploymentsResources](../models/createdeploymentservicesdeploymentsresources.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `root`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `terminationGracePeriodSeconds`                                                                                  | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |