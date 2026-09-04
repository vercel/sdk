# ThreeHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySix } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: ThreeHundredAndFiftySix = {
  slug: "<value>",
  teamId: "<id>",
  by: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `by`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `byUid`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `reasons`                                                                                        | [models.Reasons](../models/reasons.md)[]                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `removedUsers`                                                                                   | Record<string, [models.UserEventPayloadRemovedUsers](../models/usereventpayloadremovedusers.md)> | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `removedMemberCount`                                                                             | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `timestamp`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |