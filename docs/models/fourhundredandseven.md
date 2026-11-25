# FourHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeven } from "@vercel/sdk/models/usereventpayload385project.js";

let value: FourHundredAndSeven = {
  email: "Earnestine.Batz12@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload407ActorType](../models/usereventpayload407actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |