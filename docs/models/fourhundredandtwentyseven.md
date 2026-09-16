# FourHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySeven } from "@vercel/sdk/models/threehundredandninetynine.js";

let value: FourHundredAndTwentySeven = {
  email: "Aditya24@yahoo.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `prevEmail`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload427ActorType](../models/usereventpayload427actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |