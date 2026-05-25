# TwoHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFive } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndThirtyFive = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload235Previous](../models/usereventpayload235previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload235Next](../models/usereventpayload235next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |