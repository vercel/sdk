# FourHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyEight } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndThirtyEight = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload438ActorType](../models/usereventpayload438actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |