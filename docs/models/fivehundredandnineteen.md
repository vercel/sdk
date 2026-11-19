# FiveHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNineteen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndNineteen = {
  alertType: "<value>",
  groupId: "<id>",
  projectId: "<id>",
  detectionCount: 5843.42,
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