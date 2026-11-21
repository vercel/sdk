# FourHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyThree } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FourHundredAndNinetyThree = {
  username: "Rhoda_Walsh",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deletedAt`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `username`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload493ActorType](../models/usereventpayload493actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |