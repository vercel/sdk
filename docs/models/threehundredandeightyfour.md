# ThreeHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFour } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndEightyFour = {
  email: "Angie.Bechtelar0@gmail.com",
  verified: false,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `verified`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload384ActorType](../models/usereventpayload384actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |