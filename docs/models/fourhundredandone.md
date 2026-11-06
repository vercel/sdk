# FourHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndOne } from "@vercel/sdk/models/store.js";

let value: FourHundredAndOne = {
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
| `store`                                                                  | [models.UserEventPayload401Store](../models/usereventpayload401store.md) | :heavy_check_mark:                                                       | N/A                                                                      |