# FourHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySix } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndEightySix = {
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
| `actorType`                                                                      | [models.UserEventPayload486ActorType](../models/usereventpayload486actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |