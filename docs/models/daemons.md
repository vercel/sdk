# Daemons

## Example Usage

```typescript
import { Daemons } from "@vercel/sdk/models/getprojectboxesop.js";

let value: Daemons = {
  config: {
    image: {
      requested: "<value>",
      resolved: "<value>",
    },
    replicas: {
      "key": 9214.81,
    },
    resources: {
      requests: {
        memory: "<value>",
      },
    },
  },
  createdAt: "1726055615893",
  name: "<value>",
  replicas: {
    desired: 6138.65,
    items: [],
    ready: 3791.44,
    total: 780.76,
  },
  scope: {
    type: "target",
    value: "preview",
  },
  status: "reconciling",
  updatedAt: "1735644933292",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `config`                                                                                                        | [models.GetProjectBoxesConfig](../models/getprojectboxesconfig.md)                                              | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `createdAt`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `deploymentId`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The deployment whose daemons this configuration comes from. Absent for daemons managed through the daemons API. |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `replicas`                                                                                                      | [models.Replicas](../models/replicas.md)                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `scope`                                                                                                         | *models.GetProjectBoxesScope*                                                                                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `status`                                                                                                        | [models.GetProjectBoxesStatus](../models/getprojectboxesstatus.md)                                              | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `updatedAt`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |