# FourHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySeven } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndFiftySeven = {
  email: "Diana_Kshlerin49@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload457ActorType](../models/usereventpayload457actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |