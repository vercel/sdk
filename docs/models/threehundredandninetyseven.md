# ThreeHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload390type.js";

let value: ThreeHundredAndNinetySeven = {
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
| `store`                                                                  | [models.UserEventPayload397Store](../models/usereventpayload397store.md) | :heavy_check_mark:                                                       | N/A                                                                      |