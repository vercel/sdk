# FourHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyNine } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndSixtyNine = {
  username: "Tracey.Beier",
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
| `actorType`                                                                      | [models.UserEventPayload469ActorType](../models/usereventpayload469actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |