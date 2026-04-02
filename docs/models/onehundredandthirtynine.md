# OneHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyNine } from "@vercel/sdk/models/payloadviewpreference.js";

let value: OneHundredAndThirtyNine = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 3075.54,
    enabledAt: 7710.63,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 8244.83,
    enabledAt: 7346.93,
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