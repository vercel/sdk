# FiveHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwenty } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwenty = {
  username: "Magdalena_Johns",
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
| `actorType`                                                                      | [models.UserEventPayload520ActorType](../models/usereventpayload520actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |