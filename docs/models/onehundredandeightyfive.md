# OneHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFive } from "@vercel/sdk/models/payloadgituserid.js";

let value: OneHundredAndEightyFive = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 880.46,
    enabledAt: 7707.04,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 1799.21,
    enabledAt: 9518.84,
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