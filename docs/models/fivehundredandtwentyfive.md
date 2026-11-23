# FiveHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyFive } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyFive = {
  alertType: "<value>",
  groupId: "<id>",
  projectId: "<id>",
  detectionCount: 4628.63,
  detections: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `alertType`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `groupId`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `severity`                                     | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `detectionCount`                               | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `detections`                                   | [models.Detections](../models/detections.md)[] | :heavy_check_mark:                             | N/A                                            |