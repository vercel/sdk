# GetDeploymentEventsResponseBodyDeployments2

## Example Usage

```typescript
import { GetDeploymentEventsResponseBodyDeployments2 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBodyDeployments2 = {
  created: 6657.67,
  date: 4402.67,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "stderr",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `created`                                                                                                                            | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `date`                                                                                                                               | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `deploymentId`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `info`                                                                                                                               | [models.ResponseBodyInfo](../models/responsebodyinfo.md)                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `serial`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `text`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | [models.GetDeploymentEventsResponseBodyDeploymentsResponseType](../models/getdeploymenteventsresponsebodydeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `level`                                                                                                                              | [models.ResponseBodyLevel](../models/responsebodylevel.md)                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |