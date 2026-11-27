# TwoHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFour } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndNinetyFour = {
  previousTeamSuffix: "<value>",
  projectCount: 7317.1,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `previousTeamSuffix`                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectCount`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload294ActorType](../models/usereventpayload294actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |