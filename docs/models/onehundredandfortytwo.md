# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: true,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `projectId`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `projectName`                       | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `enableAffectedProjectsDeployments` | *boolean*                           | :heavy_check_mark:                  | N/A                                 |