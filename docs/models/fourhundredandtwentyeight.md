# FourHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyEight } from "@vercel/sdk/models/threehundredandninetynine.js";

let value: FourHundredAndTwentyEight = {
  username: "Shanny.Bashirian",
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
| `actorType`                                                                      | [models.UserEventPayload428ActorType](../models/usereventpayload428actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |