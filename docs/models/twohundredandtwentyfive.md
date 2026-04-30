# TwoHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFive } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndTwentyFive = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload225Previous](../models/usereventpayload225previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload225Next](../models/usereventpayload225next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |