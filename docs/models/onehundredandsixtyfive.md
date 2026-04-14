# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/payloadbuildqueue.js";

let value: OneHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: null,
  },
  next: {
    functionDefaultTimeout: 8563.97,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload165Previous](../models/usereventpayload165previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload165Next](../models/usereventpayload165next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |