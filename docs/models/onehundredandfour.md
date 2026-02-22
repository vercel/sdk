# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/payloadenablepreviewfeedback.js";

let value: OneHundredAndFour = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 8284.36,
    enabledAt: 3151.64,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 8349.71,
    enabledAt: 6554.16,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectName`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectAnalytics`                                               | [models.ProjectAnalytics](../models/projectanalytics.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `prevProjectAnalytics`                                           | [models.PrevProjectAnalytics](../models/prevprojectanalytics.md) | :heavy_check_mark:                                               | N/A                                                              |