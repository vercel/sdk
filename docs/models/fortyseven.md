# FortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FortySeven } from "@vercel/sdk/models/thirteen.js";

let value: FortySeven = {
  moderationPolicyCount: 1316.08,
  piiRedaction: {
    from: false,
    to: true,
  },
  policiesAdded: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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