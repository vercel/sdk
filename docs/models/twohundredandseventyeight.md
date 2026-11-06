# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: TwoHundredAndSeventyEight = {
  prevProjectAnalytics: {
    disabledAt: 4165.61,
    enabledAt: 9726.09,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 7991.59,
    enabledAt: 4265.09,
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