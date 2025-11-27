# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/userevent.js";

let value: EightySix = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 6510.39,
    enabledAt: 3421.27,
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