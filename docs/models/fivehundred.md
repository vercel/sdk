# FiveHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundred } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundred = {
  username: "Isadore25",
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
| `actorType`                                                                      | [models.UserEventPayload500ActorType](../models/usereventpayload500actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |