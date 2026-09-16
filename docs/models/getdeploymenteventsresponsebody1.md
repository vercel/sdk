# GetDeploymentEventsResponseBody1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody1 = {
  created: 9285.49,
  payload: {
    date: 6122.5,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "stdout",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `created`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payload`                                                                                            | [models.GetDeploymentEventsResponseBodyPayload](../models/getdeploymenteventsresponsebodypayload.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [models.ResponseBodyType](../models/responsebodytype.md)                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |