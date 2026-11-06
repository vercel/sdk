# FourHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFive } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndEightyFive = {
  username: "Alexie.Klocko98",
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
| `actorType`                                                                      | [models.UserEventPayload485ActorType](../models/usereventpayload485actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |