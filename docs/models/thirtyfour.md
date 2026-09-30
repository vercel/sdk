# ThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFour } from "@vercel/sdk/models/via3.js";

let value: ThirtyFour = {
  moderationPolicyCount: 1619.73,
  piiRedaction: {
    from: false,
    to: true,
  },
  policiesAdded: [
    "<value 1>",
  ],
  policiesModified: [],
  policiesRemoved: [
    "<value 1>",
  ],
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