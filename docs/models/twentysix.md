# TwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySix } from "@vercel/sdk/models/userevent.js";

let value: TwentySix = {
  piiRedaction: {
    from: true,
    to: false,
  },
  moderationPolicyCount: 8583.61,
  policiesAdded: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [
    "<value 1>",
  ],
  policiesModified: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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