# Twenty

The payload of the event, if requested.

## Example Usage

```typescript
import { Twenty } from "@vercel/sdk/models/nineteen.js";

let value: Twenty = {
  piiRedaction: {
    from: false,
    to: false,
  },
  moderationPolicyCount: 8964.33,
  policiesAdded: [
    "<value 1>",
    "<value 2>",
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