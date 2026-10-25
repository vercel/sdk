# TwoHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload257next.js";

let value: TwoHundredAndSixtyThree = {
  previousTeamSuffix: "<value>",
  projectCount: 3382.62,
  reason: "<value>",
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `previousTeamSuffix`                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `projectCount`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `actorId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Okta user id.                                                              |
| `actorName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `actorType`                                                                | [models.UserEventPayloadActorType](../models/usereventpayloadactortype.md) | :heavy_check_mark:                                                         | N/A                                                                        |