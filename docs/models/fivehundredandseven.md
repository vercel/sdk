# FiveHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeven } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndSeven = {
  email: "Jamel25@gmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload507ActorType](../models/usereventpayload507actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |