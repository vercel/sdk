# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndFortyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 6396.95,
  },
  next: {
    functionDefaultTimeout: 3118.55,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload243Previous](../models/usereventpayload243previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload243Next](../models/usereventpayload243next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |