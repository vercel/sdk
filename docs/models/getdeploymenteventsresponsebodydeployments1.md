# GetDeploymentEventsResponseBodyDeployments1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBodyDeployments1 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBodyDeployments1 = {
  type: "report",
  created: 1498.12,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 5814.47,
    serial: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [models.GetDeploymentEventsResponseBodyDeploymentsType](../models/getdeploymenteventsresponsebodydeploymentstype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `payload`                                                                                                            | [models.ResponseBodyPayload](../models/responsebodypayload.md)                                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |