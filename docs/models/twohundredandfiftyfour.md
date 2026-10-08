# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFiftyFour = {
  previousTeamSuffix: "<value>",
  projectCount: 1262.44,
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