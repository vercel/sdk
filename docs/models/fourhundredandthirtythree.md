# FourHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndThirtyThree = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload433ActorType](../models/usereventpayload433actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |