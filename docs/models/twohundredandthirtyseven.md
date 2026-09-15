# TwoHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySeven } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndThirtySeven = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 9850.38,
    enabledAt: 2933.02,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 2618.58,
    enabledAt: 1770.37,
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