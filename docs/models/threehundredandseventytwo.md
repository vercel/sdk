# ThreeHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyTwo } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndSeventyTwo = {
  by: "<value>",
  slug: "<value>",
  teamId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `by`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `byUid`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `reasons`                                                                                        | [models.Reasons](../models/reasons.md)[]                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `removedMemberCount`                                                                             | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `removedUsers`                                                                                   | Record<string, [models.UserEventPayloadRemovedUsers](../models/usereventpayloadremovedusers.md)> | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `timestamp`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |