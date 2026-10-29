# FourHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFive } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndFiftyFive = {
  username: "Minnie.Beatty62",
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
| `actorType`                                                                      | [models.UserEventPayload455ActorType](../models/usereventpayload455actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |