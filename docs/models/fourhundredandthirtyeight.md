# FourHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyEight } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndThirtyEight = {
  username: "Evelyn_Ward15",
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
| `actorType`                                                                      | [models.UserEventPayload438ActorType](../models/usereventpayload438actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |