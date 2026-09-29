# FourHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySix } from "@vercel/sdk/models/fourhundredandseventeen.js";

let value: FourHundredAndFortySix = {
  username: "Stephania.Homenick48",
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
| `actorType`                                                                      | [models.UserEventPayload446ActorType](../models/usereventpayload446actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |