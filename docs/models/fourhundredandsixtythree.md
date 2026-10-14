# FourHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyThree } from "@vercel/sdk/models/env.js";

let value: FourHundredAndSixtyThree = {
  username: "Aaron82",
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
| `actorType`                                                                      | [models.UserEventPayload463ActorType](../models/usereventpayload463actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |