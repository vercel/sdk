# GetDeploymentEvents31

## Example Usage

```typescript
import { GetDeploymentEvents31 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEvents31 = {
  created: 80.76,
  payload: {
    date: 2469.14,
    deploymentId: "<id>",
    id: "<id>",
    serial: "<value>",
  },
  type: "fatal",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                      | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `payload`                                                                                                      | [models.GetDeploymentEvents3Payload](../models/getdeploymentevents3payload.md)                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.GetDeploymentEvents3DeploymentsResponseType](../models/getdeploymentevents3deploymentsresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |