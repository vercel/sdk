# TwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFive } from "@vercel/sdk/models/usereventpayloadrefreshperiod.js";

let value: TwentyFive = {
  piiRedaction: {
    from: true,
    to: false,
  },
  moderationPolicyCount: 3838.9,
  policiesAdded: [
    "<value 1>",
  ],
  policiesRemoved: [
    "<value 1>",
    "<value 2>",
  ],
  policiesModified: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `piiRedaction`                                   | [models.PiiRedaction](../models/piiredaction.md) | :heavy_check_mark:                               | N/A                                              |
| `moderationPolicyCount`                          | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `policiesAdded`                                  | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `policiesRemoved`                                | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `policiesModified`                               | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |