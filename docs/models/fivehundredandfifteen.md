# FiveHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFifteen } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFifteen = {
  username: "Mckayla_Kohler32",
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
| `actorType`                                                                      | [models.UserEventPayload515ActorType](../models/usereventpayload515actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |