# FourHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFour } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: FourHundredAndFour = {
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
| `actorType`                                                                      | [models.UserEventPayload404ActorType](../models/usereventpayload404actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |