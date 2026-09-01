# ThreeHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyTwo } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndTwentyTwo = {
  email: "Amari_McCullough@yahoo.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `email`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `verified`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `actorId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Okta user id.                                                              |
| `actorType`                                                                | [models.UserEventPayloadActorType](../models/usereventpayloadactortype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `actorName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |