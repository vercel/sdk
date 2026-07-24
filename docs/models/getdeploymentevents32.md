# GetDeploymentEvents32

## Example Usage

```typescript
import { GetDeploymentEvents32 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEvents32 = {
  created: 245.68,
  date: 1606.59,
  deploymentId: "<id>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "fatal",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `date`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `deploymentId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `info`                                                                                                               | [models.GetDeploymentEvents3Info](../models/getdeploymentevents3info.md)                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `serial`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [models.GetDeploymentEvents3DeploymentsResponse200Type](../models/getdeploymentevents3deploymentsresponse200type.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `level`                                                                                                              | [models.GetDeploymentEvents3Level](../models/getdeploymentevents3level.md)                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |