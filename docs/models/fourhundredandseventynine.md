# FourHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyNine } from "@vercel/sdk/models/fourhundredandnineteen.js";

let value: FourHundredAndSeventyNine = {
  username: "Fabian_Corwin16",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deletedAt`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `username`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload479ActorType](../models/usereventpayload479actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |