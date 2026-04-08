# OneHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyThree } from "@vercel/sdk/models/resourcelimits.js";

let value: OneHundredAndFortyThree = {
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