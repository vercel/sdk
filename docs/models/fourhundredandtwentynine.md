# FourHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyNine } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndTwentyNine = {
  email: "Mabel.Kunde9@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload429ActorType](../models/usereventpayload429actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |