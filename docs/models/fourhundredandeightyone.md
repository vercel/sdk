# FourHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FourHundredAndEightyOne = {
  username: "Ernestina82",
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
| `actorType`                                                                      | [models.UserEventPayload481ActorType](../models/usereventpayload481actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |