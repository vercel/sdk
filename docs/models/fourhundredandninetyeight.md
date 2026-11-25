# FourHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyEight } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndNinetyEight = {
  username: "Terrill.Torp",
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
| `actorType`                                                                      | [models.UserEventPayload498ActorType](../models/usereventpayload498actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |