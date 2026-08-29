# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [],
  },
  next: {
    functionDefaultRegions: [],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload254Previous](../models/usereventpayload254previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload254Next](../models/usereventpayload254next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |