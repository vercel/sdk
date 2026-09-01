# TwoHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyThree } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 9226.36,
  },
  next: {
    functionDefaultTimeout: 694.16,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload253Previous](../models/usereventpayload253previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload253Next](../models/usereventpayload253next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |