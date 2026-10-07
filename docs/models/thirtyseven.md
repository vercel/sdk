# ThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySeven } from "@vercel/sdk/models/via.js";

let value: ThirtySeven = {
  rule: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `rule`                           | [models.Rule](../models/rule.md) | :heavy_check_mark:               | N/A                              |