# GetDeploymentEventsResponseBody1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody1 = {
  type: "fatal",
  created: 6122.5,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 9292.08,
    serial: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [models.ResponseBodyType](../models/responsebodytype.md)                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payload`                                                                                            | [models.GetDeploymentEventsResponseBodyPayload](../models/getdeploymenteventsresponsebodypayload.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |