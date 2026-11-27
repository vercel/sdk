# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: ThreeHundredAndThree = {
  prevProjectAnalytics: {
    disabledAt: 2182.31,
    enabledAt: 8972.07,
    id: "<id>",
  },
  projectAnalytics: {
    disabledAt: 2152.1,
    enabledAt: 1526.71,
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