# ThreeHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyNine } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: ThreeHundredAndNinetyNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorType`                                                                      | [models.UserEventPayload399ActorType](../models/usereventpayload399actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |