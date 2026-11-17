# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/usereventpayload238prevproject.js";

let value: TwoHundredAndNinetyOne = {
  prevProjectAnalytics: {
    disabledAt: 2946.34,
    enabledAt: 1193.57,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 4740.08,
    enabledAt: 7590.21,
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