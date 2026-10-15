# DeploymentCheckUpdatedPayload

The payload of the event, if requested.

## Example Usage

```typescript
import { DeploymentCheckUpdatedPayload } from "@vercel/sdk/models/deploymentcheckupdatedpayload.js";

let value: DeploymentCheckUpdatedPayload = {
  checkId: "<id>",
  checkName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `checkId`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `checkName`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_minus_sign:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_minus_sign:                       | N/A                                      |
| `projectId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `projectName`                            | *string*                                 | :heavy_check_mark:                       | N/A                                      |