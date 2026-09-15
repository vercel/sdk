# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: FourHundredAndFive = {
  username: "Wava_Wintheiser",
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
| `actorType`                                                                      | [models.UserEventPayload405ActorType](../models/usereventpayload405actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |