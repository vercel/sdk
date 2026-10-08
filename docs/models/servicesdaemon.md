# ServicesDaemon

Set when this build produces the named daemon.

## Example Usage

```typescript
import { ServicesDaemon } from "@vercel/sdk/models/canceldeploymentmissingdeploymentsresponse2.js";

let value: ServicesDaemon = {
  entrypoint: "<value>",
  replicas: {
    "key": 5817.25,
    "key1": 9385.99,
    "key2": 7859.12,
  },
  root: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `command`                                                  | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `entrypoint`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `replicas`                                                 | Record<string, *number*>                                   | :heavy_check_mark:                                         | Replica counts by region.                                  |
| `resources`                                                | [models.ServicesResources](../models/servicesresources.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `root`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |