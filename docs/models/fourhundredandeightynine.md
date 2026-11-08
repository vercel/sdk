# FourHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyNine } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FourHundredAndEightyNine = {
  email: "Mavis_Fay19@hotmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload489ActorType](../models/usereventpayload489actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |