# TwoHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyOne } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndFortyOne = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Macey.Kovacek",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload241User](../models/usereventpayload241user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |