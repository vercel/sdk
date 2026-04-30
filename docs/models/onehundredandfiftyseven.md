# OneHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySeven } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndFiftySeven = {
  projectId: "<id>",
  projectAnalytics: {
    id: "<id>",
    disabledAt: 2195.44,
    enabledAt: 4800.04,
  },
  prevProjectAnalytics: {
    id: "<id>",
    disabledAt: 5652.45,
    enabledAt: 3759.22,
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