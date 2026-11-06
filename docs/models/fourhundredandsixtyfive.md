# FourHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyFive } from "@vercel/sdk/models/store.js";

let value: FourHundredAndSixtyFive = {
  username: "Amalia85",
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
| `actorType`                                                                      | [models.UserEventPayload465ActorType](../models/usereventpayload465actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |