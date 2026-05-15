# OneHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyOne } from "@vercel/sdk/models/usereventpayload151role.js";

let value: OneHundredAndSixtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  enableAffectedProjectsDeployments: false,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `projectId`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `projectName`                       | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `enableAffectedProjectsDeployments` | *boolean*                           | :heavy_check_mark:                  | N/A                                 |