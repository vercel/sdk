# FiveHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndEight = {
  username: "Isabelle_Schimmel",
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
| `actorType`                                                                      | [models.UserEventPayload508ActorType](../models/usereventpayload508actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |