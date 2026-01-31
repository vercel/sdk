# NinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyOne } from "@vercel/sdk/models/userevent.js";

let value: NinetyOne = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6073.38,
    enabledAt: 9367.57,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 3098.43,
    enabledAt: 9480.64,
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