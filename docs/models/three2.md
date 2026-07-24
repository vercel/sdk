# Three2

## Example Usage

```typescript
import { Three2 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: Three2 = {
  created: 2003.9,
  date: 1874.74,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "middleware-invocation",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `created`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `date`                                                                   | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `deploymentId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `info`                                                                   | [models.ThreeInfo](../models/threeinfo.md)                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `serial`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `text`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [models.GetDeploymentEvents3Type](../models/getdeploymentevents3type.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `level`                                                                  | [models.ThreeLevel](../models/threelevel.md)                             | :heavy_minus_sign:                                                       | N/A                                                                      |