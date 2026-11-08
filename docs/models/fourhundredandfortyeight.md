# FourHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyEight } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndFortyEight = {
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
| `actorType`                                                                      | [models.UserEventPayload448ActorType](../models/usereventpayload448actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |