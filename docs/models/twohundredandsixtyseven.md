# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload252previousdeploymenttype.js";

let value: TwoHundredAndSixtySeven = {
  prevProjectAnalytics: {
    disabledAt: 2145.4,
    enabledAt: 3950.93,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 4036.39,
    enabledAt: 3040.53,
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