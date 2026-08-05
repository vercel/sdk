# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/twohundredandninetynine.js";

let value: ThreeHundredAndThree = {
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