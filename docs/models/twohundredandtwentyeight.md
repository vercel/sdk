# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/usereventpayload217provider.js";

let value: TwoHundredAndTwentyEight = {
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `reason`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `actorId`                                                | *string*                                                 | :heavy_check_mark:                                       | Okta user id.                                            |
| `actorName`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `actorType`                                              | [models.PayloadActorType](../models/payloadactortype.md) | :heavy_check_mark:                                       | N/A                                                      |