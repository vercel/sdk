# FourHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyTwo } from "@vercel/sdk/models/fourhundredandtwentythree.js";

let value: FourHundredAndThirtyTwo = {
  username: "Sigmund.Keebler69",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deletedAt`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `username`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload432ActorType](../models/usereventpayload432actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |