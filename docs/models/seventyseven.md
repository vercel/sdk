# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/userevent.js";

let value: SeventySeven = {
  plan: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `plan`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `removedUsers`                                                   | Record<string, [models.RemovedUsers](../models/removedusers.md)> | :heavy_minus_sign:                                               | N/A                                                              |
| `priorPlan`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isDowngrade`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `userAgent`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isReactivate`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `isTrialUpgrade`                                                 | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |