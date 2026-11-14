# FourHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyFive } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FourHundredAndNinetyFive = {
  email: "Adonis_Reichert-Howell@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload495ActorType](../models/usereventpayload495actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |