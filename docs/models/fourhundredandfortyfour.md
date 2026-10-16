# FourHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFour } from "@vercel/sdk/models/fourhundredandthirtyeight.js";

let value: FourHundredAndFortyFour = {
  username: "Hazel27",
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
| `actorType`                                                                      | [models.UserEventPayload444ActorType](../models/usereventpayload444actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |