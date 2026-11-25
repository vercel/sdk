# FiveHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndNineteen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndNineteen = {
  username: "Krystina_Mosciski57",
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
| `actorType`                                                                      | [models.UserEventPayload519ActorType](../models/usereventpayload519actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |