# GetDeploymentEvents31

## Example Usage

```typescript
import { GetDeploymentEvents31 } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEvents31 = {
  type: "command",
  created: 2469.14,
  payload: {
    deploymentId: "<id>",
    id: "<id>",
    date: 4386.4,
    serial: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [models.GetDeploymentEvents3DeploymentsResponseType](../models/getdeploymentevents3deploymentsresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `created`                                                                                                      | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `payload`                                                                                                      | [models.GetDeploymentEvents3Payload](../models/getdeploymentevents3payload.md)                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |