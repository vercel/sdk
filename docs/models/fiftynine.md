# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/twentythree.js";

let value: FiftyNine = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload59Action](../models/usereventpayload59action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |