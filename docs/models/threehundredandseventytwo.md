# ThreeHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndSeventyTwo = {
  entitlement: "<value>",
  user: {
    id: "<id>",
    username: "Scotty39",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `entitlement`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `user`                                                                 | [models.UserEventPayload372User](../models/usereventpayload372user.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCanceledAt`                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |