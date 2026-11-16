# ThreeHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyEight } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndEightyEight = {
  email: "Myles_Johnston@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload388ActorType](../models/usereventpayload388actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |