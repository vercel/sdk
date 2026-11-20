# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/twenty.js";

let value: FiftyFive = {
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