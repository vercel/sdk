# TwoHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyNine } from "@vercel/sdk/models/microfrontends2.js";

let value: TwoHundredAndSeventyNine = {
  previousTeamSuffix: "<value>",
  projectCount: 4388.76,
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
| `actorType`                                                                      | [models.UserEventPayload279ActorType](../models/usereventpayload279actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |