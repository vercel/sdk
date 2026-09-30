# FourHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyNine } from "@vercel/sdk/models/fourhundredandtwenty.js";

let value: FourHundredAndFortyNine = {
  username: "Marcelle31",
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
| `actorType`                                                                      | [models.UserEventPayload449ActorType](../models/usereventpayload449actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |