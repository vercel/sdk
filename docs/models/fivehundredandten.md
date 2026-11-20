# FiveHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTen = {
  username: "Donnell59",
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
| `actorType`                                                                      | [models.UserEventPayload510ActorType](../models/usereventpayload510actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |