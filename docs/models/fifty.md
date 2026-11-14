# Fifty

The payload of the event, if requested.

## Example Usage

```typescript
import { Fifty } from "@vercel/sdk/models/usereventvia4type.js";

let value: Fifty = {
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