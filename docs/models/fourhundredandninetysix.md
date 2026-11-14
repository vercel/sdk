# FourHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetySix } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FourHundredAndNinetySix = {
  username: "Giovanna_Dickens35",
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
| `actorType`                                                                      | [models.UserEventPayload496ActorType](../models/usereventpayload496actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |