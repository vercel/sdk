# TwoHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: TwoHundredAndSeventyNine = {
  enableAffectedProjectsDeployments: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `enableAffectedProjectsDeployments` | *boolean*                           | :heavy_check_mark:                  | N/A                                 |
| `projectId`                         | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `projectName`                       | *string*                            | :heavy_check_mark:                  | N/A                                 |