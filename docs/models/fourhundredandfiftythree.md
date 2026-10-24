# FourHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyThree } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndFiftyThree = {
  username: "Daphnee.Dicki12",
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
| `actorType`                                                                      | [models.UserEventPayload453ActorType](../models/usereventpayload453actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |