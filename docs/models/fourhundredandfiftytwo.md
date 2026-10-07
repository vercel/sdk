# FourHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyTwo } from "@vercel/sdk/models/fourhundredandtwentythree.js";

let value: FourHundredAndFiftyTwo = {
  username: "Murl_Lind-Vandervort45",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `username`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload452ActorType](../models/usereventpayload452actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |