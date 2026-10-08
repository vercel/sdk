# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndEightySeven = {
  next: {
    functionDefaultTimeout: 104.44,
  },
  previous: {
    functionDefaultTimeout: 5445.51,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload287Next](../models/usereventpayload287next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload287Previous](../models/usereventpayload287previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |