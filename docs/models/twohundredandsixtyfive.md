# TwoHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFive } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: TwoHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionBoundaryAt: 4585.65,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload265Next](../models/usereventpayload265next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload265Previous](../models/usereventpayload265previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |