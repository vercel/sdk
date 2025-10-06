# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/userevent.js";

let value: SeventyNine = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 3187.48,
    enabledAt: 1293.92,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 3079.6,
    enabledAt: 1147.99,
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