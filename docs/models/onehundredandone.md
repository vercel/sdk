# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndOne = {
  action: "mutate",
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `subscriptionId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `action`                                                                   | [models.UserEventPayload101Action](../models/usereventpayload101action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |