# FourHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySeven } from "@vercel/sdk/models/usereventpayloadtargetkind.js";

let value: FourHundredAndEightySeven = {
  username: "Mikel82",
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
| `actorType`                                                                      | [models.UserEventPayload487ActorType](../models/usereventpayload487actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |