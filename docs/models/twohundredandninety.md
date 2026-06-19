# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndNinety = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `store`                                                                  | [models.UserEventPayload290Store](../models/usereventpayload290store.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `ownerId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |