# FourHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyNine } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndNinetyNine = {
  username: "Maude.Hintz69",
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
| `actorType`                                                                      | [models.UserEventPayload499ActorType](../models/usereventpayload499actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |