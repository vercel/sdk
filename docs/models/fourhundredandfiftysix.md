# FourHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySix } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndFiftySix = {
  username: "Ignatius_Feest",
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
| `actorType`                                                                      | [models.UserEventPayload456ActorType](../models/usereventpayload456actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |