# GetDeploymentEvents3Payload

## Example Usage

```typescript
import { GetDeploymentEvents3Payload } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEvents3Payload = {
  date: 4336.63,
  deploymentId: "<id>",
  id: "<id>",
  serial: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `created`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `date`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deploymentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `info`                                                                                         | [models.GetDeploymentEvents3DeploymentsInfo](../models/getdeploymentevents3deploymentsinfo.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `proxy`                                                                                        | [models.GetDeploymentEvents3Proxy](../models/getdeploymentevents3proxy.md)                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `serial`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `text`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |