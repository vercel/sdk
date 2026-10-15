# FourHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyFour } from "@vercel/sdk/models/env.js";

let value: FourHundredAndSixtyFour = {
  username: "Toni_Hilll52",
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
| `actorType`                                                                      | [models.UserEventPayload464ActorType](../models/usereventpayload464actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |