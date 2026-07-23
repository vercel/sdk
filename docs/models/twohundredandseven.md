# TwoHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeven } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndSeven = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 961.94,
    enabledAt: 4911.9,
  },
  prevProjectAnalytics: null,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectName`                                                    | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `projectAnalytics`                                               | [models.ProjectAnalytics](../models/projectanalytics.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `prevProjectAnalytics`                                           | [models.PrevProjectAnalytics](../models/prevprojectanalytics.md) | :heavy_check_mark:                                               | N/A                                                              |