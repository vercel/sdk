# FourHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSeventyNine = {
  email: "Jaycee.Stehr@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload479ActorType](../models/usereventpayload479actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |