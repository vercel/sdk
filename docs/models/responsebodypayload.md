# ResponseBodyPayload

## Example Usage

```typescript
import { ResponseBodyPayload } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: ResponseBodyPayload = {
  deploymentId: "<id>",
  id: "<id>",
  date: 7732.14,
  serial: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `info`                                                                                         | [models.GetDeploymentEventsResponseBodyInfo](../models/getdeploymenteventsresponsebodyinfo.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `text`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `date`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `serial`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `proxy`                                                                                        | [models.ResponseBodyProxy](../models/responsebodyproxy.md)                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |