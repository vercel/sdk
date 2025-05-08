# GetDeploymentEventsResponseBody2

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody2 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody2 = {
  created: 8534.19,
  date: 2635.49,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "middleware",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `created`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `date`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `deploymentId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `info`                                                                                           | [models.Info](../models/info.md)                                                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `serial`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `text`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [models.GetDeploymentEventsResponseBodyType](../models/getdeploymenteventsresponsebodytype.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `level`                                                                                          | [models.GetDeploymentEventsResponseBodyLevel](../models/getdeploymenteventsresponsebodylevel.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |