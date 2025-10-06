# OneHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNineteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndNineteen = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Elian18",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload119User](../models/usereventpayload119user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |