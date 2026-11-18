# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndTwenty = {
  store: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `store`                                                                  | [models.UserEventPayload420Store](../models/usereventpayload420store.md) | :heavy_check_mark:                                                       | N/A                                                                      |