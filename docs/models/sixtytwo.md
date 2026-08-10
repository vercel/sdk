# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/fiftyfive.js";

let value: SixtyTwo = {
  action: "mutate",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload62Action](../models/usereventpayload62action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |