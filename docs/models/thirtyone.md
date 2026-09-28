# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: ThirtyOne = {
  moderationPolicyCount: 4499.67,
  piiRedaction: {
    from: false,
    to: true,
  },
  policiesAdded: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  policiesModified: [
    "<value 1>",
    "<value 2>",
  ],
  policiesRemoved: [],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `moderationPolicyCount`                          | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `piiRedaction`                                   | [models.PiiRedaction](../models/piiredaction.md) | :heavy_check_mark:                               | N/A                                              |
| `policiesAdded`                                  | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `policiesModified`                               | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `policiesRemoved`                                | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |