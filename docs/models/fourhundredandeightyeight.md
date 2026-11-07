# FourHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyEight } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FourHundredAndEightyEight = {
  email: "Coy.Swift@hotmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload488ActorType](../models/usereventpayload488actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |