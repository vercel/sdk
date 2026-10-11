# FourHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixty } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndSixty = {
  email: "Elvie51@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload460ActorType](../models/usereventpayload460actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |