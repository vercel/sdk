# ThreeHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFour } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndTwentyFour = {
  email: "Art_Schultz@gmail.com",
  verified: true,
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