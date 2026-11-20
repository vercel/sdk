# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: TwoHundredAndEightySeven = {
  previousTeamSuffix: null,
  projectCount: 1879.14,
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
| `actorType`                                                                      | [models.UserEventPayload287ActorType](../models/usereventpayload287actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |