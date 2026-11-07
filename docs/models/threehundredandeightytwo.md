# ThreeHundredAndEightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyTwo } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndEightyTwo = {
  email: "Dedrick.Ryan@gmail.com",
  verified: true,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `verified`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload382ActorType](../models/usereventpayload382actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |