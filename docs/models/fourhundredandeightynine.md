# FourHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyNine } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FourHundredAndEightyNine = {
  username: "Zoey.McKenzie53",
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
| `actorType`                                                                      | [models.UserEventPayload489ActorType](../models/usereventpayload489actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |