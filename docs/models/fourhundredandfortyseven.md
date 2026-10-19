# FourHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySeven } from "@vercel/sdk/models/fourhundredandfortyone.js";

let value: FourHundredAndFortySeven = {
  username: "Cruz_Anderson99",
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
| `actorType`                                                                      | [models.UserEventPayload447ActorType](../models/usereventpayload447actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |