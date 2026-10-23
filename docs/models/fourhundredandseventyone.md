# FourHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyOne } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndSeventyOne = {
  email: "Leopoldo.Gorczany98@hotmail.com",
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
| `actorType`                                                                      | [models.UserEventPayload471ActorType](../models/usereventpayload471actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |