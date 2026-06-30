# OneHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyTwo } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: OneHundredAndNinetyTwo = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 9155.64,
    enabledAt: 4908.44,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 9765.45,
    enabledAt: 5607.48,
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