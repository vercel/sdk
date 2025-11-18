# SeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyNine } from "@vercel/sdk/models/userevent.js";

let value: SeventyNine = {
  plan: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `removedUsers`                                                   | Record<string, [models.RemovedUsers](../models/removedusers.md)> | :heavy_minus_sign:                                               | N/A                                                              |
| `prevPlan`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `priorPlan`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isDowngrade`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `userAgent`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isReactivate`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `isTrialUpgrade`                                                 | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `automated`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `reason`                                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `timestamp`                                                      | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `removedMemberCount`                                             | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |