# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyFive = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 53.61,
  },
  next: {
    functionDefaultTimeout: 3409.88,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload255Previous](../models/usereventpayload255previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload255Next](../models/usereventpayload255next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |