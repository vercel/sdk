# FourHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFive } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndFortyFive = {
  username: "Hailie.Cremin",
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
| `actorType`                                                                      | [models.UserEventPayload445ActorType](../models/usereventpayload445actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |