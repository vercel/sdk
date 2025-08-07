# OneHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFifteen = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Tristian.Wiza",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload115User](../models/usereventpayload115user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |