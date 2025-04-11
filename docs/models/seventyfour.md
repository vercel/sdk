# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/userevent.js";

let value: SeventyFour = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 9674.14,
    enabledAt: 7805.31,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 4406.39,
    enabledAt: 7541.76,
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