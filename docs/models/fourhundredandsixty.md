# FourHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixty } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSixty = {
  username: "Lonie_Daniel",
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
| `actorType`                                                                      | [models.UserEventPayload460ActorType](../models/usereventpayload460actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |