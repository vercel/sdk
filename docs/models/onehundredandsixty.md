# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndSixty = {
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