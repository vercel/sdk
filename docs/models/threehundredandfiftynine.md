# ThreeHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyNine } from "@vercel/sdk/models/threehundredandthree.js";

let value: ThreeHundredAndFiftyNine = {
  email: "Jamarcus.Orn@gmail.com",
  verified: true,
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
| `actorType`                                                                      | [models.UserEventPayload359ActorType](../models/usereventpayload359actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |