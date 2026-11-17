# FourHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FourHundredAndNinetyNine = {
  email: "Arnaldo19@hotmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload499ActorType](../models/usereventpayload499actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |