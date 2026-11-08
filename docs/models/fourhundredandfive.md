# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndFive = {
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
| `store`                                                                  | [models.UserEventPayload405Store](../models/usereventpayload405store.md) | :heavy_check_mark:                                                       | N/A                                                                      |