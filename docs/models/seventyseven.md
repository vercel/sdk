# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/userevent.js";

let value: SeventySeven = {
  projectId: "<id>",
  projectAnalytics: null,
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 8478.88,
    enabledAt: 7645.5,
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