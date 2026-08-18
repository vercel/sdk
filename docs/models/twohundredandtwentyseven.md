# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/onehundredandninetythree.js";

let value: TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 4965.96,
    enabledAt: 662.67,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 4628.19,
    enabledAt: 7838.86,
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