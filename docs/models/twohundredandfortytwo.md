# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectWebAnalytics`                                                  | [models.ProjectWebAnalytics](../models/projectwebanalytics.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `prevProjectWebAnalytics`                                              | [models.PrevProjectWebAnalytics](../models/prevprojectwebanalytics.md) | :heavy_minus_sign:                                                     | N/A                                                                    |