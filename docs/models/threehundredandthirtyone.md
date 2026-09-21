# ThreeHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyOne } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `prevProjectWebAnalytics`                                              | [models.PrevProjectWebAnalytics](../models/prevprojectwebanalytics.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectName`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectWebAnalytics`                                                  | [models.ProjectWebAnalytics](../models/projectwebanalytics.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |