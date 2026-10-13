# FourHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyTwo } from "@vercel/sdk/models/fourhundredandthirtysix.js";

let value: FourHundredAndSixtyTwo = {
  email: "Annetta.Satterfield@gmail.com",
  prevEmail: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `email`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `prevEmail`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload462ActorType](../models/usereventpayload462actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |