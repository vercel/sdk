# TwoHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyThree } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndFiftyThree = {
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