# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/onehundredandninetysix.js";

let value: TwoHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 4006.63,
  },
  next: {
    functionDefaultTimeout: 4824.74,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload251Previous](../models/usereventpayload251previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload251Next](../models/usereventpayload251next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |