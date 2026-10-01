# ThreeHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifty } from "@vercel/sdk/models/twohundredandninetyfour.js";

let value: ThreeHundredAndFifty = {
  email: "Dianna.Kuhlman20@yahoo.com",
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
| `actorType`                                                                      | [models.UserEventPayload350ActorType](../models/usereventpayload350actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |