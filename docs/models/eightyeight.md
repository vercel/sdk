# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/userevent.js";

let value: EightyEight = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6783.83,
    enabledAt: 7526.17,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 78.34,
    enabledAt: 1264.5,
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