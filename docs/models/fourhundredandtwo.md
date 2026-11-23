# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndTwo = {
  email: "Gage_Koepp82@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload402ActorType](../models/usereventpayload402actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |