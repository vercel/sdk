# TwoHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFour } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload244Previous](../models/usereventpayload244previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload244Next](../models/usereventpayload244next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |