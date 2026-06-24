# TwoHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyOne } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndNinetyOne = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `store`                                                                  | [models.UserEventPayload291Store](../models/usereventpayload291store.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |