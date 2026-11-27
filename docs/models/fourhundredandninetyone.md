# FourHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyOne } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndNinetyOne = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload491ActorType](../models/usereventpayload491actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |