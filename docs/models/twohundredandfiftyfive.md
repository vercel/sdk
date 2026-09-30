# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndFiftyFive = {
  prevProjectAnalytics: {
    disabledAt: 53.61,
    enabledAt: 3409.88,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 2966.43,
    enabledAt: 9481.77,
    id: "<id>",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `prevProjectAnalytics`                                           | [models.PrevProjectAnalytics](../models/prevprojectanalytics.md) | :heavy_check_mark:                                               | N/A                                                              |
| `projectAnalytics`                                               | [models.ProjectAnalytics](../models/projectanalytics.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectName`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |