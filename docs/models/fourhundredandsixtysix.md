# FourHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySix } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndSixtySix = {
  email: "Zachary_Jakubowski95@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload466ActorType](../models/usereventpayload466actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |