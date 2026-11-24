# FourHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThree } from "@vercel/sdk/models/payloadstaticips.js";

let value: FourHundredAndThree = {
  email: "Trey66@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload403ActorType](../models/usereventpayload403actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |