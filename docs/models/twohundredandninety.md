# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/twohundredandsixtytwo.js";

let value: TwoHundredAndNinety = {
  previousTeamSuffix: "<value>",
  projectCount: 2546.6,
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
| `actorType`                                                                      | [models.UserEventPayload290ActorType](../models/usereventpayload290actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |