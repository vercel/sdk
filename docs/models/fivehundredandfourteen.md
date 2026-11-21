# FiveHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFourteen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFourteen = {
  username: "Alicia67",
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
| `actorType`                                                                      | [models.UserEventPayload514ActorType](../models/usereventpayload514actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |