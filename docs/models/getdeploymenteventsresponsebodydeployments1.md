# GetDeploymentEventsResponseBodyDeployments1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBodyDeployments1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBodyDeployments1 = {
  created: 8352.2,
  payload: {
    date: 1498.12,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "metric",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `payload`                                                                                                            | [models.ResponseBodyPayload](../models/responsebodypayload.md)                                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [models.GetDeploymentEventsResponseBodyDeploymentsType](../models/getdeploymenteventsresponsebodydeploymentstype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |