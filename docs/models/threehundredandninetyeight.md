# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayload391type.js";

let value: ThreeHundredAndNinetyEight = {
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
| `store`                                                                  | [models.UserEventPayload398Store](../models/usereventpayload398store.md) | :heavy_check_mark:                                                       | N/A                                                                      |