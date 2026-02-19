# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFour = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subscriptionId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload204Action](../models/usereventpayload204action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |