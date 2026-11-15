# FourHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTen } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: FourHundredAndTen = {
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
| `store`                                                                  | [models.UserEventPayload410Store](../models/usereventpayload410store.md) | :heavy_check_mark:                                                       | N/A                                                                      |