# FourHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighty } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndEighty = {
  username: "Elton36",
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
| `actorType`                                                                      | [models.UserEventPayload480ActorType](../models/usereventpayload480actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |